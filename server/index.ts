import * as express from "express";
import * as path from "path";
import * as fs from "fs";
import * as React from "react";

import { renderToString } from "react-dom/server";
import { App } from "../src/App.tsx";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  const app = renderToString(React.createElement(App)); 

  const indexFile = path.resolve("./dist/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
    );
  });
});

app.use(express.static("./dist"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
