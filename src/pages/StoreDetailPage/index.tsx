import { useState } from "react";
import { Button, Divider, Flex } from "@chakra-ui/react";
import Product from "@components/features/StoreDetailPage/Product";
import ProductDescription from "@components/features/StoreDetailPage/ProductDescription";
import ReviewList from "@components/features/StoreDetailPage/ReviewList";
import Reviews from "@components/features/StoreDetailPage/Reviews";

const StoreDetailPage = () => {
  const [isActive, setIsActive] = useState("description");

  const handleClick = (button: "description" | "review") => {
    setIsActive(button);
  };
  return (
    <>
      <Product />
      <Reviews />
      <Flex direction="row">
        <Flex align="flex-start" direction="column" ml={200}>
          <Button
            mt={100}
            color={isActive === "description" ? "#1C4532" : "#C2C2C2"}
            fontSize="24px"
            fontWeight="bold"
            _hover={{ bgColor: "#FFFFFF" }}
            bgColor="#FFFFFF"
            onClick={() => handleClick("description")}
          >
            상품 설명
          </Button>
          {isActive === "description" && (
            <>
              <Divider w="85px" ml={4} borderWidth="3px" borderColor="#1C4532" orientation="horizontal" />
              <ProductDescription />
            </>
          )}
        </Flex>
        <Flex align="flex-start" direction="column">
          <Button
            mt={100}
            ml={-3}
            color={isActive === "review" ? "#1C4532" : "#C2C2C2"}
            fontSize="24px"
            fontWeight="bold"
            _hover={{ bgColor: "#FFFFFF" }}
            bgColor="#FFFFFF"
            onClick={() => handleClick("review")}
          >
            후기
          </Button>
          {isActive === "review" && (
            <Flex ml={30}>
              <Divider w="52px" ml={-8} borderWidth="3px" borderColor="#1C4532" orientation="horizontal" />
              <ReviewList />
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default StoreDetailPage;
