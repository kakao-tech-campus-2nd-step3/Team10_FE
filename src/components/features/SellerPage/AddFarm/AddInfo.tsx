import { Dispatch, SetStateAction } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Flex, Input, Divider, Text, Icon } from "@chakra-ui/react";
import { Info } from "./type";

export type AddInfoProps = {
  info: Info;
  setInfo: Dispatch<SetStateAction<Info>>;
};

const AddInfo: React.FC<AddInfoProps> = ({ info, setInfo }: AddInfoProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setInfo(prev => ({ ...prev, productImageState: file.name }));
    }
  };

  const handleDetailTitleChange = (index: number, value: string) =>
    setInfo(prev => ({
      ...prev,
      detailTitles: [...prev.detailTitles, value],
    }));

  const handleDetailDescriptionChange = (index: number, value: string) =>
    setInfo(prev => ({
      ...prev,
      detailDescriptions: [...prev.detailDescriptions, value],
    }));

  const handleDetailImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setInfo(prev => ({
        ...prev,
        detailImages: [...prev.detailImages, file.name],
      }));
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInfo(prev => ({ ...prev, title: event.target.value }));

  return (
    <Flex direction="column">
      <Flex direction="row">
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          제목
        </Text>
        <Input
          w="600px"
          h="40px"
          ml={160}
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
        <Text color="#000000" fontSize="25px" fontWeight="medium">
          메인 이미지
        </Text>
        <Icon
          as={UploadOutlined}
          mt={1}
          ml={5}
          color="#000000"
          fontSize="30px"
          cursor="pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        />
        <Input display="none" accept="image/*" id="file-input" onChange={handleImageChange} type="file" />
        <Text ml={500} color="#CECECE" fontSize="28px" fontWeight="bold">
          {info.productImageState}
        </Text>
      </Flex>
      <Divider w="795px" borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />

      {Array.from({ length: 3 }).map((_, index) => (
        <Flex direction="column" mt={5}>
          <Flex direction="row" mt={5}>
            <Text color="#000000" fontSize="25px" fontWeight="medium">
              상세 제목{index + 1}
            </Text>
            <Input
              w="600px"
              h="40px"
              ml={100}
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
            <Text color="#000000" fontSize="25px" fontWeight="medium">
              상세 이미지{index + 1}
            </Text>
            <Icon
              as={UploadOutlined}
              mt={1}
              ml={5}
              color="#000000"
              fontSize="30px"
              cursor="pointer"
              onClick={() => document.getElementById(`file-input-${index}`)?.click()}
            />
            <Input
              display="none"
              accept="image/*"
              id={`file-input-${index}`}
              onChange={e => handleDetailImageChange(index, e)}
              type="file"
            />
            <Text ml={500} color="#CECECE" fontSize="28px" fontWeight="bold">
              {info.detailImages[index]}
            </Text>
          </Flex>
          <Divider w="795px" borderWidth="0.5px" borderColor="rgba(56, 56, 56, 0.5)" orientation="horizontal" />
          <Flex direction="row" mt={5}>
            <Text color="#000000" fontSize="25px" fontWeight="medium">
              상세 설명{index + 1}
            </Text>
            <Input
              w="600px"
              h="40px"
              ml={100}
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
