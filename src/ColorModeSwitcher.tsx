import React from "react";
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      ml="2"
      color="current"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      size="md"
      variant="ghost"
      {...props}
    />
  );
};

export default ColorModeSwitcher;
