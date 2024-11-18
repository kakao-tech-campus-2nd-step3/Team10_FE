import { useState } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import farm1 from "@assets/Image/Farm/Farm1.png";
import Image from "@components/common/Image";
import ContactNumberModal from "./ContactNumberModal";
import ReviewModal from "./ReviewModal";

const FarmList = () => {
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
      <Text mt={10} color="#000000" fontSize="20px" fontWeight="bold">
        2024.09.14
      </Text>
      <Text mt={3} color="#000000" fontSize="16px" fontWeight="bold">
        지민이네 복숭아 농장
      </Text>
      <Flex align="center" justify="space-between" direction="row" gap="10px">
        <Image mt={3} w="150px" borderRadius="xl" h="150px" src={farm1} alt="Farm image" />
        <Flex align="flex-start" justify="flex-start" direction="column" ml={-10}>
          <Flex direction="row">
            <Text color="#000000" fontSize="16px" fontWeight="bold">
              주소 :&nbsp;
            </Text>
            <Text color="#000000" fontSize="16px" fontWeight="medium">
              부산대학교 금정구 중앙대로 1616
            </Text>
          </Flex>

          <Text color="#000000" fontSize="16px" fontWeight="bold">
            한 줄 소개
          </Text>
          <Text w="300px" color="#000000" fontSize="16px" fontWeight="medium">
            가끔 지민은 학교에서 심각하게 집에 가고싶을 때마다 달달한 복숭아 아이스티를 마시며 향수병을 달랩니다.
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
