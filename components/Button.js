import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colours.secondary70};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colours.primary};
  border: 1px solid ${props => props.theme.colours.secondary70};
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
`

export default Button
