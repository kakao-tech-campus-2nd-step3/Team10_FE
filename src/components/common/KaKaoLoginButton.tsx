import { ImageProps, Link } from "@chakra-ui/react";
import Image from "@components/common/Image";

type KaKaoLoginButtonProps = ImageProps;

const KaKaoLoginButton = ({ ...props }: KaKaoLoginButtonProps) => {
  const link = "https://google.com";

  return (
    <Link href={link} isExternal>
      <Image
        objectFit="contain"
        src="/assets/kakao_login/ko/kakao_login_large_wide.png"
        alt="카카오 로그인"
        {...props}
      />
    </Link>
  );
};

export default KaKaoLoginButton;
