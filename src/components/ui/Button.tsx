import { ReactNode } from "react";

import { Button as BPButton } from "@blueprintjs/core";

type ButtonProps = {
  children?: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <BPButton>{children}</BPButton>;
};

export default Button;
