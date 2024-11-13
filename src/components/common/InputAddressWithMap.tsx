import { useEffect, useState } from "react";
import { Flex, FlexProps, Icon, IconButton, Input } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import KaKaoMap from "@components/common/KaKaoMap";
import { Pin } from "@components/common/KaKaoMap/type";
import { address2LatLng } from "@utils/mapUtils";

type InputAddressWithMapProps = {
  address: string;
  onAddressChange: (value: string) => void;
  wrapperProps?: FlexProps;
} & FlexProps;

const InputAddressWithMap = ({ address, onAddressChange, wrapperProps, ...props }: InputAddressWithMapProps) => {
  const [mapPins, setMapPins] = useState<Pin[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (address) {
      address2LatLng(address).then(result => {
        setMapPins(result?.map(r => ({ key: `${r.lat}_${r.lng}`, lat: r.lat, lng: r.lng })) || []);
      });
    }
  }, [address]);

  return (
    <Flex direction="column" w="fit-content" {...wrapperProps}>
      <Flex
        overflow="hidden"
        borderWidth="2px"
        _focusWithin={{
          borderColor: "blue.500",
        }}
        {...props}
      >
        <Input
          w="100%"
          h="100%"
          border="none"
          _focus={{
            border: "none",
            outline: "none",
            ring: "none",
          }}
          outline="none"
          onChange={e => onAddressChange(e.target.value)}
          placeholder="주소를 입력해주세요"
          value={address}
        />
        <IconButton
          flexShrink="1"
          h="100%"
          borderRadius="0"
          aria-label="search"
          aspectRatio="1"
          onClick={() => setOpen(!open)}
        >
          <Icon
            as={FaAngleDown}
            transform={`rotate(${open ? "180deg" : "0deg"})`}
            transition="transform 0.3s"
            size="100%"
          />
        </IconButton>
      </Flex>
      {open && <KaKaoMap pins={mapPins} aspectRatio="1" w="100%" />}
    </Flex>
  );
};

export default InputAddressWithMap;
