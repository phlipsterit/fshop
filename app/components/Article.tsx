import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { ArticlePageStoryblok } from "~/component-types-sb";

export const Article = ({ blok }: { blok: ArticlePageStoryblok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid} className="px-4">
    <h1>{blok.Name}</h1>
    {blok.Bilde && (
      <>
        <img
          className="md:hidden"
          src={`${blok.Bilde.filename}/m/400x400${
            blok.Bilde.focus ? "/filters:focal(" + blok.Bilde.focus + ")" : ""
          }`}
        ></img>
        <img
          className="max-md:hidden"
          src={`${blok.Bilde.filename}/m/800x400${
            blok.Bilde.focus ? "/filters:focal(" + blok.Bilde.focus + ")" : ""
          }`}
        ></img>
      </>
    )}
  </main>
);
