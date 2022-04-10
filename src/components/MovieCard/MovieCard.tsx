import React, { FunctionComponent } from "react";

export const MovieCard: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

// Implementation
type Props = {
  title: string;
  description: string;
};
