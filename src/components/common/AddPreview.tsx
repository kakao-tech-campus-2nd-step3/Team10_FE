import { Text, Flex } from "@chakra-ui/react";
import Image from "@components/common/Image";
import { AddInfoProps } from "./AddInfo";
import { detailImages } from "./type";

type AddPreviewProps = {
  info: AddInfoProps["info"];
};

const AddPreview: React.FC<AddPreviewProps> = ({ info }) => (
  <Flex direction="column" mb={50}>
    <Text mt={10} color="#000000" fontSize="32px" fontWeight="bold">
      {info.title}
    </Text>
    <Flex direction="row">
      <Image
        w="500px"
        h="490px"
        mt={10}
        objectFit="cover"
        mr="10"
        borderRadius="12px"
        alt="mainImage"
        src={info.mainImage}
      />
      <Flex direction="column">
        {detailImages.map((key, index) => (
          <Flex
            key={key}
            align="center"
            gap="5"
            w="520px"
            h="150px"
            mt={index === 0 ? 10 : 5}
            px="10"
            borderRadius="12px"
            bgColor="#22543d"
          >
            <Flex direction="column" w="300px" h="100%">
              <Text maxW="300px" mt={7} color="#FFFFFF" fontSize="20px" fontWeight="bold" isTruncated>
                {info.detailTitles[index]}
              </Text>
              <Text
                maxW="300px"
                mt={5}
                color="#FFFFFF"
                fontSize="15px"
                fontWeight="medium"
                whiteSpace="pre-wrap"
                noOfLines={3}
              >
                {info.detailDescriptions[index]}
              </Text>
            </Flex>
            <Image
              flexShrink="0"
              w="120px"
              h="120px"
              borderRadius="12px"
              objectFit="cover"
              alt={`detailImage${index + 1}`}
              src={info.detailImages[index]}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  </Flex>
);

export default AddPreview;
