import { FC, memo } from "react";
import { Outlet, Link } from "react-router-dom";

export const MainLayout: FC = memo(() => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <Link to="/">Top</Link>
        <Link to="/About">About</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
});
