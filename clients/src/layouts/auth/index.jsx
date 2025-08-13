import { Outlet, useLocation } from "react-router-dom";
import { AppAuthCover, AppAuthBackground } from "./style";
import { paths } from "../../routepath";

const backgroundMap = {
  [paths.login]: "/authbg.png",
  [`/${paths.register}`]: "/createbg.jpg",
  [`/${paths.otp}`]: "/otpbg.webp",
  [`/${paths.forgot}`]: "/forgotbg.png",
};

export const AuthLayout = () => {
  const location = useLocation();
  const bgImage = backgroundMap[location.pathname];

  return (
    <AppAuthCover>
      <Outlet />
      {bgImage && <AppAuthBackground $image={bgImage} />}
    </AppAuthCover>
  );
};
