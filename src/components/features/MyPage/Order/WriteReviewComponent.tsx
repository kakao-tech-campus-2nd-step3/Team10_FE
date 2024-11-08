/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEvent, ReactEventHandler, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { CameraOutlined } from "@ant-design/icons";
import { Flex, Box, Button, Text, Divider, Icon, Input } from "@chakra-ui/react";
import StarRating from "@components/common/StarRating";

interface WriteReviewComponentProps {
  value: number;
  onChange: (event: number) => void;
}

const WriteReviewComponent: React.FC<WriteReviewComponentProps> = ({ value, onChange }) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      const newImages = [...images, ...selectedFiles].slice(0, 5);
      setImages(newImages);
      setSelectedCount(newImages.length);
    }
  };

  return (
    <Box w="700px" h="800px" ml={20} border="none" borderRadius="12px" bgColor="#FFFFFF">
      <Flex direction="column">
        <Text mt={10} ml={10} color="#22543D" fontSize="20px" fontWeight="bold">
          후기 쓰기
        </Text>
        <Divider w="600px" mt={2} ml={10} borderWidth="3px" borderColor="#22543D" orientation="horizontal" />

        <Text mt={10} ml={10} color="#383838" fontSize="25px" fontWeight="bold">
          만족도를 평가해 주세요!
        </Text>
        <Flex direction="row" mt={5} ml={10}>
          <StarRating rating={value} onRatingChange={onChange} />
        </Flex>
        <Text mt={10} ml={10} color="#383838" fontSize="25px" fontWeight="bold">
          후기 작성
        </Text>
        <Flex
          align="center"
          justify="center"
          direction="column"
          w="100px"
          h="100px"
          mt={3}
          ml={10}
          borderWidth="0.4px"
          borderColor="#000000"
          bgColor="#FFFFFF"
        >
          <Input
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
            type="file"
          />
          <Icon as={CameraOutlined} color="#000000" fontSize="50px" cursor="pointer" />
          <Text mb={6} color="#D9D9D9" fontSize="25px" fontWeight="bold">
            {selectedCount}/5
          </Text>
        </Flex>
        <Box w="600px" h="150px" mt={3} ml={10} borderWidth="0.4px" borderColor="#000000" bgColor="#FFFFFF">
          <Input
            w="500px"
            mt={2}
            ml={2}
            border="none"
            _placeholder={{ color: "#D9D9D9", fontWeight: "bold", fontSize: "16px" }}
            placeholder="구매하신 상품의 후기를 남겨주시면 다른 구매자들에게도 도움이 됩니다."
          />
        </Box>
        <Flex justify="center" direction="row" gap="5px" mt={10}>
          <Button
            w="230px"
            h="50px"
            color="#22543D"
            fontSize="24px"
            fontWeight="bold"
            borderWidth="1px"
            borderColor="#22543D"
            borderRadius="12px"
            _hover={{ bgColor: "#FFFFFF" }}
            bgColor="#FFFFFF"
          >
            작성 취소
          </Button>
          <Button
            w="230px"
            h="50px"
            color="#FFFFFF"
            fontSize="24px"
            fontWeight="bold"
            borderWidth="1px"
            borderColor="#22543D"
            borderRadius="12px"
            _hover={{ bgColor: "#22543D" }}
            bgColor="#22543D"
          >
            작성 완료
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default WriteReviewComponent;
