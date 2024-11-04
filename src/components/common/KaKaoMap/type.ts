export type Pin = {
  key: string;
  lat: number;
  lng: number;
};

export type PinComponentType<T extends Pin> = React.FC<{
  pin: T;
  onClick?: (pin: T) => void;
}>;
