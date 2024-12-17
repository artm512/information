import { FC, memo } from "react";
import { Outlet, Link } from "react-router-dom";

const gnavLinks = [
  {
    to: "/",
    label: "Top",
  },
  {
    to: "/about",
    label: "About",
  },
];

export const MainLayout: FC = memo(() => {
  return (
    <>
      <header className="bg-white shadow">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8">
          <div className="flex">
            <Link to="/" className="font-semibold hover:opacity-70">
              LOGO
            </Link>
          </div>
          <div className="flex flex-1 gap-6 justify-end items-center">
            {gnavLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm/6 text-gray-900 hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl p-12">
        <Outlet />
      </main>
    </>
  );
});
