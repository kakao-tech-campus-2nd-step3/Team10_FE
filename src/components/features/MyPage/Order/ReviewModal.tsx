import React, { useRef, useState, useEffect } from "react";
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
  Alert,
} from "@chakra-ui/react";
import { useCreateFarmReviews, useCreateProductReviews, useUpdateReviews } from "@api/reviewApi";
import Image from "@components/common/Image";
import StarRating from "@components/common/StarRating";
import BasicModal from "@components/common/modal/BasicModal";

type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productId?: number;
  farmId?: number;
  isEditing?: boolean;
  initialData?: {
    rating: number;
    content: string;
    id: number;
  };
};

const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  productId,
  farmId,
  isEditing = false,
  initialData,
}) => {
  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>();
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  const { mutate: createProductReview } = useCreateProductReviews();
  const { mutate: createFarmReview } = useCreateFarmReviews();
  const { mutate: updateReview } = useUpdateReviews(initialData?.id || 0);

  useEffect(() => {
    if (isEditing && initialData) {
      setRating(initialData.rating);
      setReviewText(initialData.content);
    }
  }, [isEditing, initialData]);

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
      rating,
      content: reviewText,
    };
    if (isEditing && initialData) {
      updateReview(
        { ...reviewData, farm_id: initialData.id },
        {
          onSuccess: () => {
            <Alert title="리뷰가 성공적으로 수정되었습니다." />;
            setTimeout(onClose, 2000);
          },
          onError: () => {
            <Alert title="리뷰 수정 중 오류가 발생했습니다." />;
          },
        },
      );
    } else {
      if (productId) {
        createProductReview(
          { ...reviewData, product_id: productId },
          {
            onSuccess: () => {
              <Alert title="상품 리뷰가 성공적으로 등록되었습니다." />;
              setTimeout(onClose, 2000);
            },
            onError: () => {
              <Alert title="상품 리뷰 등록 중 오류가 발생했습니다." />;
            },
          },
        );
      }

      if (farmId) {
        createFarmReview(
          { ...reviewData, farm_id: farmId },
          {
            onSuccess: () => {
              <Alert title="농장 리뷰가 성공적으로 등록되었습니다." />;
              setTimeout(onClose, 2000);
            },
            onError: () => {
              <Alert title="농장 리뷰 등록 중 오류가 발생했습니다." />;
            },
          },
        );
      }
    }
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
