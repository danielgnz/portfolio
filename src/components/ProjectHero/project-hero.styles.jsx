import styled, { css } from "styled-components"

const primaryColor = "#107887"
const secondaryColor = "rgb(50, 50, 93)"
const bgPrimary = "rgb(245, 245, 245)"

export const Wrapper = styled.div`
  background: ${bgPrimary};
  height: 12vh;
`
const Text = css`
  text-align: center;
  margin: 0;
`

export const Title = styled.h1`
  color: ${primaryColor};
  ${Text}
`

export const SubTitle = styled.p`
  color: ${secondaryColor};
  ${Text}
`
