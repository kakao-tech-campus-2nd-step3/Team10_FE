import { useMemo } from "react";
import { useMap } from "react-kakao-maps-sdk";
import { Pin } from "@components/common/KaKaoMap/type";

type ResetMapBoundsProps = {
  pins: Pin[];
};

const ResetMapBounds = ({ pins }: ResetMapBoundsProps) => {
  const map = useMap();

  const mapBounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();

    pins.forEach(pin => {
      bounds.extend(new kakao.maps.LatLng(pin.lat, pin.lng));
    });

    return bounds;
  }, [pins]);

  map.setBounds(mapBounds);

  return null;
};

export default ResetMapBounds;
