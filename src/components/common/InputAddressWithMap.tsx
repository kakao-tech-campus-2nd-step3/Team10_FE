import { useEffect, useState } from "react";
import { Flex, FlexProps, Icon, IconButton, Input } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import KaKaoMap from "@components/common/KaKaoMap";
import { address2LatLng, latLng2RoadAddress } from "@utils/mapUtils";
import { Pin } from "./KaKaoMap/type";

type InputAddressWithMapProps = {
  address: string;
  onAddressChange: (value: string) => void;
  wrapperProps?: FlexProps;
  alwaysOpen?: boolean;
} & FlexProps;

type PinWithRoadAddress = {
  roadAddress: string;
} & Pin;

const InputAddressWithMap = ({
  address,
  onAddressChange,
  wrapperProps,
  alwaysOpen,
  ...props
}: InputAddressWithMapProps) => {
  const [mapPins, setMapPins] = useState<PinWithRoadAddress[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (address) {
      address2LatLng(address).then(result => {
        setMapPins(
          result?.map(r => ({ key: `${r.lat}_${r.lng}`, lat: r.lat, lng: r.lng, roadAddress: r.road_address })) || [],
        );
      });
    }
  }, [address]);

  const mapOpen = alwaysOpen || open;

  return (
    <Flex direction="column" w="fit-content" {...wrapperProps}>
      <Flex
        overflow="hidden"
        borderWidth="2px"
        borderTopRadius="md"
        borderBottomRadius={mapOpen ? "none" : "md"}
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
        {!alwaysOpen && (
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
        )}
      </Flex>
      {mapOpen && (
        <KaKaoMap<PinWithRoadAddress>
          pins={mapPins.filter(async p => (await latLng2RoadAddress(p.lat, p.lng)) !== "")}
          onClickPin={async pin => onAddressChange(pin.roadAddress)}
          aspectRatio="1"
          borderBottomRadius="md"
          w="100%"
        />
      )}
    </Flex>
  );
};

export default InputAddressWithMap;
