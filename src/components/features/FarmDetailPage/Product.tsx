import { useState, useEffect } from "react";
import { Box, Button, Text, Flex, Divider, Select } from "@chakra-ui/react";
import { useGetFarmDetail } from "@api/farmApi";
import Image from "@components/common/Image";

const defaultFormData = {
  name: "",
  imageUrl: "",
  price: "",
  maxPeople: "",
  maxTeam: "",
  growEnv: "",
  addressDetail: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
};

const Product = ({ scheduleId }: { scheduleId: number }) => {
  const { data: farmDetail = defaultFormData } = useGetFarmDetail(scheduleId);

  const [dateOptions, setDateOptions] = useState<string[]>([]);

  useEffect(() => {
    if (farmDetail.startDate && farmDetail.endDate) {
      const startDate = new Date(farmDetail.startDate);
      const endDate = new Date(farmDetail.endDate);
      const dates = [];

      for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d).toISOString().split("T")[0]);
      }

      setDateOptions(dates);
    }
  }, [farmDetail.startDate, farmDetail.endDate]);

  return (
    <Flex direction="row">
      <Box mt={100} ml={200}>
        <Image w="500px" h="530px" borderRadius="12px" alt="farmImage" src={farmDetail.imageUrl} />
      </Box>
      <Flex direction="column" maxW="600px">
        <Flex direction="row">
          <Flex direction="column" ml={50}>
            <Text mt={100} color="#000000" fontSize="30px" fontWeight="bold">
              {farmDetail.name}
            </Text>
            <Text mt={1} color="#000000" fontSize="30px" fontWeight="bold">
              {farmDetail.price}원 / {farmDetail.maxTeam}팀(최대인원: {farmDetail.maxPeople}명)
            </Text>
          </Flex>
        </Flex>
        <Divider
          w="500px"
          mt={3}
          ml={50}
          borderWidth="0.7px"
          borderColor="rgba(56, 56, 56, 0.5)"
          orientation="horizontal"
        />
        <Flex direction="row">
          <Text mt={8} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            재배 환경
          </Text>
          <Text mt={8} ml={75} color="#000000" fontSize="18px" fontWeight="medium">
            {farmDetail.growEnv}
          </Text>
        </Flex>
        <Flex direction="row">
          <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            지역
          </Text>
          <Text mt={3} ml={105} color="#000000" fontSize="18px" fontWeight="medium">
            {farmDetail.addressDetail}
          </Text>
        </Flex>
        <Flex direction="row">
          <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            수용 가능 인원
          </Text>
          <Text mt={3} ml={10} color="#000000" fontSize="18px" fontWeight="medium">
            {farmDetail.maxPeople}인
          </Text>
        </Flex>
        <Flex direction="row">
          <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            체험 시작 시간
          </Text>
          <Text mt={3} ml={10} color="#000000" fontSize="18px" fontWeight="medium">
            {farmDetail.startTime}
          </Text>
        </Flex>
        <Flex direction="row">
          <Text mt={3} ml={50} color="#000000" fontSize="18px" fontWeight="bold">
            체험 종료 시간
          </Text>
          <Text mt={3} ml={10} color="#000000" fontSize="18px" fontWeight="medium">
            {farmDetail.endTime}
          </Text>
        </Flex>
        <Flex direction="row" gap="10px" mt={7} ml={50}>
          <Select w="245px" placeholder="소인">
            <option value="option1">1명</option>
            <option value="option2">2명</option>
            <option value="option3">3명</option>
            <option value="option3">4명</option>
          </Select>
          <Select w="245px" placeholder="대인">
            <option value="option1">1명</option>
            <option value="option2">2명</option>
            <option value="option3">3명</option>
            <option value="option3">4명</option>
          </Select>
        </Flex>
        <Select w="500px" mt={3} ml={50} placeholder="예약가능일자 조회">
          {dateOptions.map(date => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </Select>
        <Button
          alignItems="center"
          justifyContent="center"
          display="flex"
          w="500px"
          h="55px"
          mt={7}
          ml={50}
          color="#FFFFFF"
          fontSize="24px"
          fontWeight="bold"
          borderRadius="15px"
          _hover={{ bgColor: "#1C4532" }}
          _active={{ bgColor: "#1C4532" }}
          bgColor="#1C4532"
        >
          예약하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default Product;
