import styled from "styled-components";
import { Input } from "../../shared/input";

const ErrorText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;

export const FormInput = ({ error, ...props }) => {
  return (
    <div>
      <Input {...props} />
      {error && <ErrorText>{error.message}</ErrorText>}
    </div>
  );
};
