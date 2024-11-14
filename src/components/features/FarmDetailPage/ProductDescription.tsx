import { Box, Text, Flex } from "@chakra-ui/react";
import { useGetFarmDetail } from "@api/farmApi";
import Image from "@components/common/Image";

const defaultInfo = {
  title: "",
  mainImage: "",
  detailTitles: ["", "", ""],
  detailDescriptions: ["", "", ""],
  detailImages: ["", "", ""],
};

const ProductDescription = ({ scheduleId }: { scheduleId: number }) => {
  const { data: farmDetail = defaultInfo } = useGetFarmDetail(scheduleId);

  return (
    <Flex direction="column">
      <Text mt={5} color="#000000" fontSize="32px" fontWeight="bold">
        {farmDetail.title}
      </Text>
      <Flex direction="row">
        <Image w="500px" h="490px" mt={10} borderRadius="12px" alt="mainImage" src={farmDetail.mainImage} />
        <Flex direction="column">
          <Box w="520px" h="150px" mt={10} ml={10} borderRadius="12px" bgColor="#22543D">
            <Flex direction="row">
              <Flex direction="column" ml={8}>
                <Text mt={7} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                  {farmDetail.detailTitles[0]}
                </Text>
                <Text color="#FFFFFF" fontSize="15px" fontWeight="medium">
                  {farmDetail.detailDescriptions[0]}
                </Text>
              </Flex>
              <Image
                w="120px"
                h="120px"
                mt={4}
                ml={67}
                borderRadius="100px"
                alt="detailImage"
                src={farmDetail.detailImages[0]}
              />
            </Flex>
          </Box>
          <Box w="520px" h="150px" mt={5} ml={10} borderRadius="12px" bgColor="#22543D">
            <Flex direction="row">
              <Flex direction="column" ml={8}>
                <Text mt={7} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                  {farmDetail.detailTitles[1]}
                </Text>
                <Text color="#FFFFFF" fontSize="15px" fontWeight="medium">
                  {farmDetail.detailDescriptions[1]}
                </Text>
              </Flex>
              <Image
                w="120px"
                h="120px"
                mt={4}
                ml={41}
                borderRadius="100px"
                alt="detailImage"
                src={farmDetail.detailImages[0]}
              />
            </Flex>
          </Box>
          <Box w="520px" h="150px" mt={5} ml={10} borderRadius="12px" bgColor="#22543D">
            <Flex direction="row">
              <Flex direction="column" ml={8}>
                <Text mt={7} color="#FFFFFF" fontSize="27px" fontWeight="bold">
                  {farmDetail.detailTitles[2]}
                </Text>
                <Text color="#FFFFFF" fontSize="15px" fontWeight="medium">
                  {farmDetail.detailDescriptions[2]}
                </Text>
              </Flex>
              <Image
                w="120px"
                h="120px"
                mt={4}
                ml={41}
                borderRadius="100px"
                alt="detailImage"
                src={farmDetail.detailImages[0]}
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDescription;
