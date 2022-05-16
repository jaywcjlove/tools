import GitHubCorners from "@uiw/react-github-corners";
import { Fragment } from "react";
import "@wcj/dark-mode";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.less";

export default function Layout() {
  return (
    <Fragment>
      <GitHubCorners size={52} href="https://github.com/jaywcjlove/tools" />
      <div className={styles.warpper}>
        <aside>
          <header>
            <h1>Web Tools</h1>
            <dark-mode permanent></dark-mode>
          </header>
          <nav>
            <NavLink to="/"> URL Encode </NavLink>
            <NavLink to="/text-case"> Text Case </NavLink>
          </nav>
        </aside>
        <article>
          <Outlet />
        </article>
      </div>
    </Fragment>
  );
}
