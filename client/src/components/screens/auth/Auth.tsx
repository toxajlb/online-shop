import { FC } from "react";

import Heading from "@/ui/Heading";
import Meta from "@/ui/Meta";
import Button from "@/ui/button/Button";

const Auth: FC = () => {
  return (
    <Meta title="Auth">
      <Heading>Auth</Heading>
      <Button variant="orange">Auth</Button>
    </Meta>
  );
};

export default Auth;
