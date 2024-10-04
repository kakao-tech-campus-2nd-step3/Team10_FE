import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import poomasi from "@assets/logo/logo.png";
import size from "@constants/size";

const Footer = () => (
  <footer>
    <Flex direction="column" h={size.footer.h} px={size.footer.px} pt="10" bg="#F5F5F5">
      <Flex columnGap="5" fontSize="xx-large" fontWeight="bold">
        <Text>품앗이 고객센터</Text>
        <Text color="#22543D">010.1234.1234</Text>
      </Flex>
      <Box pl="3">
        <Text color="#383838" fontSize="large" fontWeight="bold">
          우리가 꿈꾸는 내일, 농민과 고객이 만드는 새로운 유통
        </Text>
        <Divider my="8" borderColor="#276749" />
        <Image w="24" alt="poomasi" src={poomasi} />
        <Box mt="2" color="#333333">
          <Text>Team10</Text>
          <Text>Designer: 김도균, 이경서, 정지민</Text>
          <Text>Frontend Engineer: 김도균, 이경서</Text>
          <Text>Backend Engineer: 김건호, 이풍헌, 정지민, 정진택</Text>
        </Box>
      </Box>
      <Flex columnGap="3" mt="auto" py="5" color="#999999" fontSize="x-large">
        <Link as={Text} href="/">
          서비스 이용약관
        </Link>
        <Link as={Text} href="/">
          개인정보 처리 방침
        </Link>
      </Flex>
    </Flex>
  </footer>
);

export default Footer;
