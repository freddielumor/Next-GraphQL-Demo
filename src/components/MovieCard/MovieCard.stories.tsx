// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MovieCard } from "./MovieCard";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Test Title",
};
