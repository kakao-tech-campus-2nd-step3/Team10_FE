import { Dispatch, SetStateAction, useRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Flex, Input, Divider, Text, Icon, Textarea } from "@chakra-ui/react";
import Image from "@components/common/Image";
import { detailImages, Info } from "./type";

export type AddInfoProps = {
  info: Info;
  setInfo: Dispatch<SetStateAction<Info>>;
};

const AddInfo: React.FC<AddInfoProps> = ({ info, setInfo }: AddInfoProps) => {
  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const detailImageInputRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setInfo(prev => ({ ...prev, mainImage: imageUrl }));
    }
  };

  const handleDetailTitleChange = (index: number, value: string) =>
    setInfo(prev => ({
      ...prev,
      detailTitles: prev.detailTitles.map((title, i) => (i === index ? value : title)),
    }));

  const handleDetailDescriptionChange = (index: number, value: string) =>
    setInfo(prev => ({
      ...prev,
      detailDescriptions: prev.detailDescriptions.map((desc, i) => (i === index ? value : desc)),
    }));

  const handleDetailImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setInfo(prev => ({
        ...prev,
        detailImages: prev.detailImages.map((image, i) => (i === index ? imageUrl : image)),
      }));
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInfo(prev => ({ ...prev, title: event.target.value }));

  return (
    <Flex direction="column">
      <Flex direction="row">
        <Text minW="250px" mr="5" color="#000000" fontSize="25px" fontWeight="medium">
          제목
        </Text>
        <Input
          h="40px"
          ml="auto"
          p="10px"
          color="#06070c"
          fontSize="20px"
          fontWeight="medium"
          borderWidth="0.7px"
          borderColor="#000000"
          borderRadius="12px"
          _focus={{
            outline: "none",
            border: "0.7px solid #22543D",
          }}
          _placeholder={{ color: "transparent" }}
          bgColor="#FFFFFF"
          onChange={handleTitleChange}
          value={info.title}
        />
      </Flex>

      <Flex direction="row" mt={5}>
        <Text minW="200px" color="#000000" fontSize="25px" fontWeight="medium">
          메인 이미지
        </Text>
        <Icon
          as={UploadOutlined}
          mx="5"
          mt={1}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => mainImageInputRef.current?.click()}
        />
        <Image objectFit="cover" flexShrink="0" src={info.mainImage} alt="main image" width="200px" height="200px" />
        <Input ref={mainImageInputRef} display="none" accept="image/*" onChange={handleImageChange} type="file" />
      </Flex>

      {detailImages.map((key, index) => (
        <Flex key={key} direction="column" mt={5}>
          <Divider my="5" borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
          <Flex direction="row" mt={5}>
            <Text minW="250px" mr="5" color="#000000" fontSize="25px" fontWeight="medium">
              상세 제목{index + 1}
            </Text>
            <Input
              h="40px"
              p="10px"
              color="#06070c"
              fontSize="20px"
              fontWeight="medium"
              borderWidth="0.7px"
              borderColor="#000000"
              borderRadius="12px"
              _focus={{ outline: "none", border: "0.7px solid #22543D" }}
              _placeholder={{ color: "transparent" }}
              bgColor="#FFFFFF"
              onChange={e => handleDetailTitleChange(index, e.target.value)}
              value={info.detailTitles[index]}
            />
          </Flex>
          <Flex direction="row" mt={5}>
            <Text minW="200px" color="#000000" fontSize="25px" fontWeight="medium">
              상세 이미지{index + 1}
            </Text>
            <Icon
              as={UploadOutlined}
              mx="5"
              mt={1}
              color="#000000"
              fontSize="30px"
              cursor="pointer"
              onClick={() => detailImageInputRef[index].current?.click()}
            />
            <Image
              flexShrink="0"
              src={info.detailImages[index]}
              objectFit="cover"
              alt={`detail image ${index}`}
              width="200px"
              height="200px"
            />
            <Input
              ref={detailImageInputRef[index]}
              display="none"
              accept="image/*"
              id={`file-input-${index}`}
              onChange={e => handleDetailImageChange(index, e)}
              type="file"
            />
          </Flex>
          <Flex direction="row" mt={5}>
            <Text minW="250px" mr="5" color="#000000" fontSize="25px" fontWeight="medium">
              상세 설명{index + 1}
            </Text>
            <Textarea
              h="40px"
              p="10px"
              color="#06070c"
              fontSize="20px"
              fontWeight="medium"
              borderWidth="0.7px"
              borderColor="#000000"
              borderRadius="12px"
              _focus={{ outline: "none", border: "0.7px solid #22543D" }}
              _placeholder={{ color: "transparent" }}
              resize="none"
              bgColor="#FFFFFF"
              onChange={e => handleDetailDescriptionChange(index, e.target.value)}
              value={info.detailDescriptions[index]}
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default AddInfo;
