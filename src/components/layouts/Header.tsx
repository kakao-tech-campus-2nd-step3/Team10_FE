import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input, Box, Flex, Text, Icon } from "@chakra-ui/react";
import poomasi from "@assets/logo/logo.png";
import Image from "@components/common/Image";
import useLogin from "@hooks/useLogin";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>("소개");

  const { loginCheck, logout } = useLogin();

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <Flex pos="relative" direction="column" shadow="lg" bgColor="#FFFFFF">
      <Flex justify="flex-end" p="1px 60px" color="#1C4532" fontSize="8px" fontWeight="regular">
        {loginCheck()
          ? [
              <Text as={Link} mr="12px" to="/mypage">
                마이페이지
              </Text>,
              <Text cursor="pointer" onClick={logout}>
                로그아웃
              </Text>,
            ]
          : [
              <Text as={Link} mr="12px" to="/register">
                회원가입
              </Text>,
              <Text as={Link} to="/login">
                로그인
              </Text>,
            ]}
      </Flex>

      <Flex align="center" justify="space-between" p="10px 50px">
        <Image h="30px" objectFit="contain" alt="poomasi" src={poomasi} />

        <Flex align="center" mx="20px" ml={-70}>
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
          h="40px"
          ml={10}
          px="20px"
          border="2px solid #1C4532"
          borderColor="#1C4532"
          borderRadius="12px"
          _placeholder={{ color: "#B3B3B3" }}
          placeholder="검색어를 입력해주세요."
        />

        <Flex ml={250}>
          <Box mx="10px" color="#1C4532" cursor="pointer">
            <Icon as={HeartOutlined} fontSize="25px" />
          </Box>
          <Box mx="10px" color="#1C4532" cursor="pointer">
            <Icon as={ShoppingCartOutlined} fontSize="25px" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
