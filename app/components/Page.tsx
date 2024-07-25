import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { PageStoryblok } from "~/component-types-sb";

export const Page = ({ blok }: { blok: PageStoryblok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid} className="px-4">
    {blok.body &&
      blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
  </main>
);
