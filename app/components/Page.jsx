import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid} className="px-4">
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
