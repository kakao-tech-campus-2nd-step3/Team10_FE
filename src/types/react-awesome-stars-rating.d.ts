declare module "react-awesome-stars-rating" {
  import * as React from "react";

  interface ReactStarsRatingProps {
    value?: number;
    onChange: (event: FormEvent<HTMLDivElement>) => void;
  }

  const ReactStarsRating: React.FC<ReactStarsRatingProps>;
  export default ReactStarsRating;
}
