import { Link, useLocation } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";
import { Flex, Text, Icon } from "@chakra-ui/react";
import poomasi from "@assets/logo/logo.png";
import Avatar from "@components/common/Avatar";
import Image from "@components/common/Image";
import useLogin from "@hooks/useLogin";

const menuLinks = [
  {
    name: "소개",
    link: "/introduction",
  },
  {
    name: "상점",
    link: "/store",
  },
  {
    name: "농장",
    link: "/schedule",
  },
];

const Header = () => {
  const location = useLocation();

  const { user, loginCheck, logout, sellerCheck } = useLogin();
  return (
    <Flex pos="relative" direction="column" shadow="lg" bgColor="#FFFFFF">
      <Flex align="center" justify="space-between" p="5">
        <Flex>
          <Link to="/">
            <Image h="30px" objectFit="contain" alt="poomasi" src={poomasi} />
          </Link>
          {sellerCheck() && (
            <Text
              as={Link}
              align="center"
              ml="3"
              p="2"
              color="white"
              fontSize="12px"
              fontWeight="regular"
              bg="#1C4532"
              borderRadius="xl"
              cursor="pointer"
              to="/seller"
            >
              farmer
            </Text>
          )}
          {menuLinks.map(menuLink => (
            <Text
              as={Link}
              mx="5"
              color={menuLink.link === location.pathname ? "#1C4532" : "#999999"}
              fontSize="20px"
              fontWeight="regular"
              cursor="pointer"
              to={menuLink.link}
            >
              {menuLink.name}
            </Text>
          ))}
        </Flex>

        <Flex align="center" gap="5">
          {loginCheck() ? (
            [
              <Link to="/me/product-wish">
                <Icon as={HeartOutlined} color="#1C4532" fontSize="25px" />
              </Link>,
              <Link to="/cart">
                <Icon as={ShoppingCartOutlined} color="#1C4532" fontSize="25px" />
              </Link>,
              <Flex as={Link} gap="1" to="/me">
                <Avatar size="sm" src={user.profile} />
                <Text color="#1C4532" fontSize="20px" fontWeight="regular" cursor="pointer">
                  {user.name}님
                </Text>
              </Flex>,
              <Icon as={LogoutOutlined} color="#1C4532" fontSize="25px" cursor="pointer" onClick={() => logout()} />,
            ]
          ) : (
            <Text as={Link} color="#1C4532" fontSize="20px" fontWeight="regular" cursor="pointer" to="/login">
              로그인
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
