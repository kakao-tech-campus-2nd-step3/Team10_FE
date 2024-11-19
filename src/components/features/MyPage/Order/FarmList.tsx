import { useState } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import farm1 from "@assets/Image/Farm/Farm1.png";
import Image from "@components/common/Image";
import { Farm } from "@type/index";
import ContactNumberModal from "./ContactNumberModal";
import ReviewModal from "./ReviewModal";

const FarmList = ({ item }: { item: Farm }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <Flex direction="column">
      <Text mt={3} color="#000000" fontSize="16px" fontWeight="bold">
        {item.name}
      </Text>
      <Flex align="center" justify="space-between" direction="row" gap="10px">
        <Image mt={3} w="150px" borderRadius="xl" h="150px" src={farm1} alt="Farm image" />
        <Flex align="flex-start" justify="flex-start" direction="column" ml={-10}>
          <Flex direction="row">
            <Text color="#000000" fontSize="16px" fontWeight="bold">
              주소 :&nbsp;
            </Text>
            <Text color="#000000" fontSize="16px" fontWeight="medium">
              {item.address}
            </Text>
          </Flex>

          <Text color="#000000" fontSize="16px" fontWeight="bold">
            한 줄 소개
          </Text>
          <Text w="300px" color="#000000" fontSize="16px" fontWeight="medium">
            {item.description}
          </Text>
        </Flex>
        <Flex justify="center" direction="column" gap="10px">
          <Button
            w="200px"
            h="45px"
            color="#22543D"
            fontSize="20px"
            fontWeight="bold"
            borderWidth="1px"
            borderColor="#22543D"
            borderRadius="12px"
            _hover={{ bgColor: "#FFFFFF" }}
            bgColor="#FFFFFF"
            onClick={handleOpenContactModal}
          >
            📞 문의
          </Button>
          {isContactModalOpen && <ContactNumberModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />}
          <Button
            w="200px"
            h="45px"
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="bold"
            borderWidth="1px"
            borderColor="#22543D"
            borderRadius="12px"
            _hover={{ bgColor: "#22543D" }}
            bgColor="#22543D"
            onClick={handleOpenReviewModal}
          >
            ✍️ 후기 쓰기
          </Button>
          {isReviewModalOpen && <ReviewModal isOpen={isReviewModalOpen} onClose={handleCloseReviewModal} />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FarmList;
