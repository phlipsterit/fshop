import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { ArticlePageStoryblok } from "~/component-types-sb";

export const Article = ({ blok }: { blok: ArticlePageStoryblok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid} className="px-4">
    <h1>{blok.Name}</h1>
    {blok.Bilde && <img src={blok.Bilde.filename}></img>}
  </main>
);
