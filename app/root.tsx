import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Feature } from "~/components/Feature";
import { Grid } from "~/components/Grid";
import { Page } from "~/components/Page";
import { Teaser } from "~/components/Teaser";
import { Article } from "./components/Article";

const components = {
  article: Article,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "F1xsYM0UylDtF0Z4UJg3Ggtt",
  use: [apiPlugin],
  apiOptions: {
    // storyblok-js-client config object
    cache: {
      clear: "auto",
      type: "none",
    },
  },
  components,
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
