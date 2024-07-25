import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "F-Shop" },
    { name: "description", content: "Welcome to F-Shop!" },
  ];
};

export { default, loader } from "./$";
