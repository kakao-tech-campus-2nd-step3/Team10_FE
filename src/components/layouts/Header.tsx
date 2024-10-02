import { useState } from "react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input, Box, Flex, Text, Image, Icon } from "@chakra-ui/react";
import poomasi from "@assets/logo/logo.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>("소개");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <Flex direction="column" bgColor="#FFFFFF">
      <Flex justify="flex-end" p="10px 50px">
        <Text mr="12px" color="#1C4532" fontSize="8px" fontWeight="regular" cursor="pointer">
          회원가입
        </Text>
        <Text color="#1C4532" fontSize="20px" fontWeight="regular" cursor="pointer">
          로그인
        </Text>
      </Flex>

      <Flex align="center" justify="space-between" p="20px 50px">
        <Image boxSize="50px" alt="poomasi" src={poomasi} />

        <Flex align="center" mx="20px" ml="20px">
          {["소개", "상점", "농장"].map(menu => (
            <Text
              key={menu}
              mx="30px"
              color={activeMenu === menu ? "#1C4532" : "#999999"}
              fontSize="20px"
              fontWeight="regular"
              cursor="pointer"
              onClick={() => handleMenuClick(menu)}
            >
              {menu}
            </Text>
          ))}
        </Flex>

        <Input
          w="400px"
          h="50px"
          ml="50px"
          px="20px"
          borderColor="#1C4532"
          borderRadius="12px"
          _placeholder={{ color: "#B3B3B3" }}
          placeholder="검색어를 입력해주세요."
        />

        <Flex align="center" ml="100px">
          <Box mx="10px" color="#1C4532" cursor="pointer">
            <Icon as={HeartOutlined} />
          </Box>
          <Box mx="10px" color="#1C4532" cursor="pointer">
            <Icon as={ShoppingCartOutlined} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
