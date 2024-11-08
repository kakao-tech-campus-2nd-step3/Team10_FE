import { FormEvent } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Flex, FlexProps } from "@chakra-ui/react";

type StarRatingProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
  disabled?: boolean;
} & FlexProps;

const StarRating = ({ rating, onRatingChange, disabled = false, ...props }: StarRatingProps) => {
  const onChange = (e: FormEvent<HTMLDivElement>) => {
    onRatingChange(Number(e));
  };

  return <Flex as={ReactStarsRating} isEdit={!disabled} onChange={onChange} value={rating} {...props} />;
};

export default StarRating;
