import React, { useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Flex,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Button,
  Text,
  Divider,
  Icon,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Image from "@components/common/Image";
import StarRating from "@components/common/StarRating";
import BasicModal from "@components/common/modal/BasicModal";

type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productId?: number;
};

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, productId }) => {
  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>();
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };
  const onRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleReviewSubmit = () => {
    const reviewData = {
      productId,
      rating,
      reviewText,
      imageUrl,
    };
    postMessage(reviewData);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <BasicModal isOpen={isOpen} onClose={onClose} maxW="800px" maxH="1100px">
      <ModalCloseButton _hover={{ bg: "#FFFFFF" }} />
      <ModalHeader color="#22543D" fontSize="25px" fontWeight="bold">
        후기 쓰기
      </ModalHeader>
      <Divider w="600px" ml={6} borderWidth="3px" borderColor="#22543D" orientation="horizontal" />

      <ModalBody>
        <Flex justify="center" direction="column">
          <Text mt={10} color="#383838" fontSize="28px" fontWeight="bold">
            만족도를 평가해 주세요!
          </Text>
          <Flex direction="row" mt={5}>
            <StarRating rating={rating} onRatingChange={onRatingChange} />
          </Flex>

          <Flex direction="row">
            <Flex w="550px">
              <Text mt={10} color="#000000" fontSize="28px" fontWeight="bold">
                후기 작성
              </Text>
            </Flex>
            <Icon
              as={UploadOutlined}
              mx="5"
              mt={12}
              ml={-230}
              color="#000000"
              fontSize="30px"
              cursor="pointer"
              onClick={() => mainImageInputRef.current?.click()}
            />
            <Flex pos="relative" align="flex-end" justify="flex-end" w="100%" h="200px" mt="5" mr={100}>
              <Image flexShrink="0" w="200px" h="200px" objectFit="cover" alt="main image" src={imageUrl} />
              <Input ref={mainImageInputRef} display="none" accept="image/*" onChange={handleImageChange} type="file" />
            </Flex>
          </Flex>

          <Textarea
            w="600px"
            h="150px"
            mt={10}
            p="10px"
            borderWidth="0.4px"
            borderColor="#000000"
            _focus={{ borderColor: "#000000", boxShadow: "none" }}
            _placeholder={{ color: "#D9D9D9", fontWeight: "bold", fontSize: "16px" }}
            bgColor="#FFFFFF"
            onChange={handleReviewTextChange}
            placeholder="구매하신 상품의 후기를 남겨주시면 다른 구매자들에게도 도움이 됩니다."
            value={reviewText}
          />

          <Flex justify="center" direction="row" gap="5px" mt={10} mb={10}>
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
              onClick={handleCancel}
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
              onClick={handleReviewSubmit}
            >
              작성 완료
            </Button>
          </Flex>
        </Flex>
      </ModalBody>
    </BasicModal>
  );
};

export default ReviewModal;
