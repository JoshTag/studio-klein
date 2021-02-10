import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colours.secondary70};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colours.primary};
  border: 1px solid ${({ theme }) => theme.colours.secondary70};
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
`;

export default Button;