import { Link } from "@remix-run/react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { PageLinkStoryblok } from "~/component-types-sb";

export const PageLink = ({ blok }: { blok: PageLinkStoryblok }) => (
  <Link
    {...storyblokEditable(blok)}
    key={blok._uid}
    className="px-4"
    to={blok.url.cached_url || "/"}
  >
    {blok.displayName}
  </Link>
);
