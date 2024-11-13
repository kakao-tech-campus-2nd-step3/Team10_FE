export type SearchResult = {
  address: string;
  road_address?: string;
  postal_code?: string;
  x: number;
  y: number;
};

export type LatLng = {
  lat: number;
  lng: number;
};

const addressSearch = async (address: string): Promise<SearchResult[]> => {
  const geocoder = new kakao.maps.services.Geocoder();

  return new Promise((resolve, reject) => {
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        resolve(
          result.map(r => ({
            address: r.address_name,
            road_address: r.road_address?.address_name,
            postal_code: r.road_address?.zone_no,
            x: Number(r.x),
            y: Number(r.y),
          })),
        );
      } else {
        reject(new Error("Failed to find address"));
      }
    });
  });
};

const latLngSearch = async (lat: number, lng: number): Promise<SearchResult | null> => {
  const geocoder = new kakao.maps.services.Geocoder();

  return new Promise((resolve, reject) => {
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        resolve(
          result[0]
            ? {
                address: result[0].address.address_name,
                road_address: result[0].road_address?.address_name,
                postal_code: result[0].road_address?.zone_no,
                x: lat,
                y: lng,
              }
            : null,
        );
      } else {
        reject(new Error("Failed to find address"));
      }
    });
  });
};

const address2LatLng = async (address: string): Promise<LatLng[]> =>
  addressSearch(address)
    .then(result => result.map(r => ({ lat: r.y, lng: r.x })))
    .catch(() => []);

const latLng2Address = async ({ lat, lng }: LatLng): Promise<string> =>
  latLngSearch(lat, lng)
    .then(result => result?.address || "")
    .catch(() => "");

export { address2LatLng, latLng2Address };
