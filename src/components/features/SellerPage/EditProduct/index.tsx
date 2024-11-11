import { Box, Button, Flex } from "@chakra-ui/react";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import PriceInfo from "./PriceInfo";

interface AddProductProps {
  setIsEditProductVisible: (visible: boolean) => void;
}

const EditProduct: React.FC<AddProductProps> = ({ setIsEditProductVisible }) => (
  <Box w="1000px" h="1250px" mt={-450} ml={350} bgColor="#FFFFFF">
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
        onClick={() => setIsEditProductVisible(false)}
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
        수정하기
      </Button>
    </Flex>
  </Box>
);

export default EditProduct;
