export type SearchResult = {
  address: string;
  road_address: string;
  postal_code?: string;
  lat: number;
  lng: number;
};

const addressSearch = async (address: string): Promise<SearchResult[]> => {
  if (!address) {
    return [];
  }
  const geocoder = new kakao.maps.services.Geocoder();

  return new Promise((resolve, reject) => {
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        resolve(
          result
            .map(r => ({
              address: r.address_name,
              road_address: r.road_address?.address_name,
              postal_code: r.road_address?.zone_no,
              lat: Number(r.y),
              lng: Number(r.x),
            }))
            .filter(r => r.road_address),
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
          result[0] && result[0].road_address
            ? {
                address: result[0].address.address_name,
                road_address: result[0].road_address.address_name,
                postal_code: result[0].road_address?.zone_no,
                lat,
                lng,
              }
            : null,
        );
      } else {
        reject(new Error("Failed to find address"));
      }
    });
  });
};

const address2LatLng = async (address: string): Promise<SearchResult[]> => addressSearch(address).catch(() => []);

const latLng2Address = async (lat: number, lng: number): Promise<string> =>
  latLngSearch(lat, lng)
    .then(result => result?.address || "")
    .catch(() => "");

const latLng2RoadAddress = async (lat: number, lng: number): Promise<string> =>
  latLngSearch(lat, lng)
    .then(result => result?.road_address || "")
    .catch(() => "");

export { addressSearch, latLngSearch, address2LatLng, latLng2Address, latLng2RoadAddress };
