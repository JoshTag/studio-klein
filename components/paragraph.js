import styled from "styled-components"

const Paragarph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 27px;
  margin: 1rem 0;
  display: inline-block;
`

export default Paragarph