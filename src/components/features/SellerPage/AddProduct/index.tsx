import { Button, Flex } from "@chakra-ui/react";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import PriceInfo from "./PriceInfo";

interface AddProductProps {
  setIsAddProductVisible: (visible: boolean) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ setIsAddProductVisible }) => (
  <Flex direction="column" w="1000px" h="1250px" mt={-450} ml={350} bgColor="#FFFFFF">
    <BasicInfo />
    <DetailInfo />
    <PriceInfo />
    <Flex justify="center" direction="row" gap="5px" mt={20} mb={10}>
      <Button
        w="230px"
        h="53px"
        color="#22543D"
        fontSize="24px"
        fontWeight="bold"
        borderWidth="1px"
        borderColor="#22543D"
        borderRadius="12px"
        _hover={{
          bgColor: "#FFFFFF",
          borderColor: "#22543D",
        }}
        bgColor="#FFFFFF"
        onClick={() => setIsAddProductVisible(false)}
      >
        취소하기
      </Button>
      <Button
        w="230px"
        h="53px"
        color="#FFFFFF"
        fontSize="24px"
        fontWeight="bold"
        borderWidth="1px"
        borderColor="#22543D"
        borderRadius="12px"
        _hover={{
          bgColor: "#22543D",
          borderColor: "#22543D",
        }}
        bgColor="#22543D"
      >
        등록하기
      </Button>
    </Flex>
  </Flex>
);

export default AddProduct;
