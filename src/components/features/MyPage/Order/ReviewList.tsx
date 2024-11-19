import { useState } from "react";
import { Flex, Button, Text, Alert } from "@chakra-ui/react";

import { useDeleteReviews } from "@api/reviewApi";
import Image from "@components/common/Image";
import { Review } from "@type/index";
import ReviewModal from "./ReviewModal";

const ReviewList = ({ item }: { item: Review }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { mutate: deleteReview } = useDeleteReviews(item.id);

  const handleDelete = () => {
    deleteReview(undefined, {
      onSuccess: () => {
        <Alert title="해당 리뷰가 삭제되었습니다." />;
      },
      onError: () => {
        <Alert title="삭제에 실패했습니다. 다시 시도해주세요." />;
      },
    });
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Flex direction="column">
        <Flex justify="space-between" direction="row" flex="1" mt={3}>
          <Flex justify="flex-start" direction="column">
            <Text mt={3} color="#000000" fontSize="16px" fontWeight="medium">
              {item.name}
            </Text>
            <Image mt={3} w="150px" h="150px" borderRadius="xl" src={item.image} alt="Review image" />
            <Text mt={3} color="#000000" fontSize="16px" fontWeight="medium">
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
              onClick={handleDelete}
            >
              리뷰 삭제
            </Button>
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
              onClick={handleEditClick}
            >
              리뷰 수정
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <ReviewModal
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        isEditing
        initialData={{
          rating: item.rating,
          content: item.description,
          id: item.id,
        }}
      />
    </>
  );
};

export default ReviewList;
