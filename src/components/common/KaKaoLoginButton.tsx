import { ImageProps, Link } from "@chakra-ui/react";
import Image from "@components/common/Image";

type KaKaoLoginButtonProps = ImageProps;

const KaKaoLoginButton = ({ ...props }: KaKaoLoginButtonProps) => {
  const link = `${process.env.REACT_APP_API_URL}/oauth2/authentication/kakao`;

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
