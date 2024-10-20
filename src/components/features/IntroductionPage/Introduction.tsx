import { Box, Text, Flex } from "@chakra-ui/react";
import Intro1 from "@assets/Image/Intro/Intro1.png";
import Intro2 from "@assets/Image/Intro/Intro2.png";
import Intro3 from "@assets/Image/Intro/Intro3.png";
import Intro5 from "@assets/Image/Intro/Intro5.png";
import Intro6 from "@assets/Image/Intro/Intro6.png";
import Intro7 from "@assets/Image/Intro/Intro7.png";
import Intro8 from "@assets/Image/Intro/Intro8.png";
import Image from "@components/common/Image";

const Introduction = () => (
  <Box overflowY="auto" w="1512px" h="100vh">
    <Flex direction="column" w="full" h="100vh">
      <Box pos="relative" w="full" h="463px">
        <Flex pos="absolute" top="160px" left="400px">
          <Text color="#FFFFFF" fontSize="32px" fontWeight="bold" textAlign="center">
            우리가 꿈꾸는 내일, 농민과 고객이 함께 만드는 새로운 유통
          </Text>
        </Flex>
        <Image w="full" h="463px" alt="Intro1" src={Intro1} />
      </Box>
    </Flex>

    <Flex direction="column" w="full" h="100vh" mt={-100}>
      <Text mb={1} color="#000000" fontSize="20px" fontWeight="bold" textAlign="center">
        품앗이 이야기
      </Text>
      <Text mt={10} color="#22543D" fontSize="36px" fontWeight="bold" textAlign="center">
        35년간 독점된 가락시장 경매제도로부터
        <br />
        농민들을 지켜주세요
      </Text>
      <Flex align="center" justify="center" direction="row" gap="10px">
        <Image w="600px" h="408px" alt="Intro2" src={Intro2} />
        <Flex direction="column" w="370px" h="408px" textAlign="left">
          <Text mt={1} mb={5} color="#1C4532" fontSize="20px" fontWeight="medium">
            농산물이 우리에게 오기까지 도매법인과 중도매인을 거치면서 유통비용이 너무 많이 올라가고 있어요.
          </Text>
          <Text mb={5} color="#1C4532" fontSize="20px" fontWeight="medium">
            그 결과 농업인들은 수익이 줄고, 우리는 더 비싼 가격을 내야 하죠. 그리고 가락시장 같은 큰 도매시장은 몇몇
            대기업이 독점하고 있어서 공정한 경쟁이 어렵대요.
          </Text>
          <Text mb={5} color="#1C4532" fontSize="20px" fontWeight="medium">
            실제로 서울 가락시장에서는 6개 도매법인이 거래의 90% 이상을 차지하고 있대요.
          </Text>
          <Text color="#1C4532" fontSize="20px" fontWeight="medium">
            또한 경매 방식 때문에 가격 변동이 심해서, 같은 농산물이 7,000원에서 32,000원까지 다양한 가격으로 팔리기도
            해요.이러면 시장이 불안정해지고, 농업인과 소비자 모두 손해를 보게 돼요.
          </Text>
        </Flex>
      </Flex>
    </Flex>

    <Flex align="center" justify="center">
      <Image w="1150px" h="750px" alt="Intro3" src={Intro3} />
    </Flex>

    <Flex direction="column" mt={100}>
      <Text color="#1C4532" fontSize="32px" fontWeight="bold" textAlign="center">
        하지만 품앗이가 있다면 어떨까요?
      </Text>
      <Text color="#000000" fontSize="20px" fontWeight="medium" textAlign="center">
        농업인 → 소비자
        <br />
        이렇게 중간 단계를 줄여서 유통비용을 낮출 수 있어요.{" "}
      </Text>
      <Text color="#000000" fontSize="20px" fontWeight="medium" textAlign="center">
        직접 거래로 신선한 농산물을 더 합리적인 가격에 만날 수 있죠.
        <br />
        가격도 더 안정적이어서, 농업인도 제값을 받고 우리는 합리적인 가격에 구매할 수 있어요.
      </Text>
      <Text mb={100} color="#000000" fontSize="24px" fontWeight="bold" textAlign="center">
        과도한 유통비용과 불안정한 가격, 이제 바꿔볼 때가 아닐까요?
        <br />
        모두가 행복한 새로운 유통 구조를 함께 만들어봐요!
      </Text>
    </Flex>

    <Flex align="center" justify="center" direction="row" gap="20px">
      <Flex direction="column">
        <Text mt={160} color="#22543D" fontSize="30px" fontWeight="bold" textAlign="center">
          더 올바른 유통 과정
          <br />
          농민은, 합당한 대가를
          <br />
          고객은 합당한 금액을 보장받는 내일
        </Text>
        <Image w="571px" h="400px" mt={100} alt="Intro5" src={Intro5} />
      </Flex>
      <Image w="500px" h="800px" alt="Intro6" src={Intro6} />
    </Flex>

    <Flex align="center" justify="center" direction="column" mt={200}>
      <Text color="#1C4532" fontSize="32px" fontWeight="bold" textAlign="center">
        농업인의 땀과 소비자의 마음을 직접 이어,
        <br />
        모두가 행복한 길을 열어갑니다.
      </Text>
      <Flex align="center" justify="center" direction="row" gap="30px">
        <Box w="525px" h="400px" borderRadius="12px" bgColor="#F5F5F5">
          <Flex align="center" justify="center" w="50px" h="50px" mt={70} ml={235} borderRadius="50%" bgColor="#000000">
            <Text color="#FFFFFF" fontSize="24px" fontWeight="bold" textAlign="center">
              1
            </Text>
          </Flex>
          <Text mt={40} color="#000000" fontSize="30px" fontWeight="bold" textAlign="center">
            노인분들의 온라인 판매를 지원해요.
          </Text>
          <Flex w="480px" h="400px">
            <Text mt={5} ml={50} color="#000000" fontSize="23px" fontWeight="medium">
              전통시장에서 판매에 어려움을 겪으셨던 노인분들이 더 쉽고 편하게 온라인에서 상품을 판매하실 수 있도록
              도와드릴 거예요.
            </Text>
          </Flex>
        </Box>
        <Image w="525px" h="400px" alt="Intro7" src={Intro7} />
      </Flex>

      <Flex align="center" justify="center" direction="row" gap="30px" mt={30}>
        <Image w="525px" h="400px" alt="Intro8" src={Intro8} />
        <Box w="525px" h="400px" borderRadius="12px" bgColor="#F5F5F5">
          <Flex align="center" justify="center" w="50px" h="50px" mt={70} ml={235} borderRadius="50%" bgColor="#000000">
            <Text color="#FFFFFF" fontSize="24px" fontWeight="bold" textAlign="center">
              2
            </Text>
          </Flex>
          <Text mt={40} color="#000000" fontSize="30px" fontWeight="bold" textAlign="center">
            명확한 생산자 정보로 신뢰 구축해요.
          </Text>
          <Flex w="480px" h="400px">
            <Text mt={5} ml={50} color="#000000" fontSize="23px" fontWeight="medium">
              소비자에게는 명확한 생산자 정보를 제공하여, 신뢰할 수 있는 구매 경험과 투명한 유통 과정을 선사합니다.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </Box>
);

export default Introduction;
