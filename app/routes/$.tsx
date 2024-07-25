import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
  ISbStoriesParams,
} from "@storyblok/react";

export default function Page() {
  let { story, debugInfo } = useLoaderData<typeof loader>();
  story = useStoryblokState(story);

  return (
    <>
      <StoryblokComponent blok={story.content} />
      <div>{JSON.stringify(debugInfo, null, 2)}</div>
    </>
  );
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  let slug = params["*"] ?? "home";
  let blogSlug = params["*"] === "blog/" ? "blog/home" : null;
  const url = new URL(request.url);
  const isDraft = url.searchParams.get("_storyblok") !== null;

  let sbParams: ISbStoriesParams = {
    version: isDraft ? "draft" : "published",
  };

  let { data } = await getStoryblokApi()
    .get(`cdn/stories/${blogSlug ? blogSlug : slug}`, sbParams)
    .catch((e) => {
      console.log("e", e);
      return { data: null };
    });

  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({
    story: data?.story,
    debugInfo: {
      requestUrl: request.url,
      buildVersion: 5,
      sbParams,
    },
  });
};
