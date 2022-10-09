import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import logoImage from "~/images/logo.png";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "BabyOkapi.eu",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { rel: "shortcut icon", href: logoImage, type: "image/x-icon" },
    { rel: "icon", href: logoImage, type: "image/x-icon" },
    { rel: "stylesheet", href: styles },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}
