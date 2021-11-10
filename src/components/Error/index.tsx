import { FC } from "react";
import { ErrorMessage } from "./styles";

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

export default Error;
