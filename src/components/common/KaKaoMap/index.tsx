import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { Box, BoxProps } from "@chakra-ui/react";
import ResetMapBounds from "@components/common/KaKaoMap/ResetMapBounds";
import { Pin, PinComponentType } from "@components/common/KaKaoMap/type";

type KaKaoMapProps<T extends Pin> = {
  pins: T[];
  onClickPin?: (pin: T) => void;
  PinComponent?: PinComponentType<T>;
} & BoxProps;

const KaKaoMap = <T extends Pin>({ pins, onClickPin, PinComponent, ...rest }: KaKaoMapProps<T>) => {
  useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_API_KEY || "",
    libraries: ["clusterer", "drawing", "services"],
  });

  const calculateCenter = () => {
    if (pins.length === 0) {
      return {
        lat: 37.5665,
        lng: 126.978,
      };
    }

    const latSum = pins.reduce((acc, pin) => acc + pin.lat, 0);
    const lngSum = pins.reduce((acc, pin) => acc + pin.lng, 0);

    return {
      lat: latSum / pins.length,
      lng: lngSum / pins.length,
    };
  };

  return (
    <Box as={Map} center={calculateCenter()} isPanto {...rest}>
      {pins.map(pin =>
        PinComponent ? (
          <PinComponent key={pin.key} pin={pin} onClick={onClickPin} />
        ) : (
          <MapMarker
            key={pin.key}
            position={{
              lat: pin.lat,
              lng: pin.lng,
            }}
            onClick={() => onClickPin && onClickPin(pin)}
          />
        ),
      )}
      <ResetMapBounds pins={pins} />
    </Box>
  );
};

export default KaKaoMap;
