// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface FeatureStoryblok {
  name?: string;
  component: "feature";
  _uid: string;
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (FeatureStoryblok | GridStoryblok | PageStoryblok | ProductPageStoryblok | TeaserStoryblok)[];
  component: "grid";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (FeatureStoryblok | GridStoryblok | PageStoryblok | ProductPageStoryblok | TeaserStoryblok)[];
  component: "page";
  _uid: string;
  [k: string]: any;
}

export interface ProductPageStoryblok {
  Name?: string;
  component: "product page";
  _uid: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  component: "teaser";
  _uid: string;
  [k: string]: any;
}
