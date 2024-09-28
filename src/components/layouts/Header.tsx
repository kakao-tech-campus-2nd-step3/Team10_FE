import * as React from "react";
import { Input, Box, Flex, Text, Image } from "@chakra-ui/react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import poomasi from "../../assets/logo/logo.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string>("소개");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <Flex flexDirection="column" backgroundColor="#FFFFFF">
      <Flex justifyContent="flex-end" padding="10px 50px">
        <Text marginRight="12px" fontSize="8px" fontWeight="regular" color="#1C4532" cursor="pointer">
          회원가입
        </Text>
        <Text fontSize="20px" fontWeight="regular" color="#1C4532" cursor="pointer">
          로그인
        </Text>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" padding="20px 50px">
        <Image src={poomasi} alt="poomasi" boxSize="50px" />

        <Flex alignItems="center" marginLeft="20px" marginX="20px">
          {["소개", "상점", "농장"].map(menu => (
            <Text
              key={menu}
              marginX="30px"
              fontSize="20px"
              fontWeight="regular"
              color={activeMenu === menu ? "#1C4532" : "#999999"}
              onClick={() => handleMenuClick(menu)}
              cursor="pointer"
            >
              {menu}
            </Text>
          ))}
        </Flex>

        <Input
          placeholder="검색어를 입력해주세요."
          marginLeft="50px"
          width="400px"
          borderColor="#1C4532"
          borderRadius="12px"
          paddingX="20px"
          height="50px"
          _placeholder={{ color: "#B3B3B3" }}
        />

        <Flex alignItems="center" marginLeft="100px">
          <Box marginX="10px" cursor="pointer" color="#1C4532">
            <HeartOutlined />
          </Box>
          <Box marginX="10px" cursor="pointer" color="#1C4532">
            <ShoppingCartOutlined />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
