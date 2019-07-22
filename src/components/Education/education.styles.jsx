import styled from "styled-components"

import { ButtonStyle, HeadingSectionStyle } from "../../global.styles"

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  background: #fff;
`
export const ContainerItem = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
`

export const Title = styled.h1`
  ${HeadingSectionStyle}
`

export const LoadEducationButton = styled.div`
  ${ButtonStyle}
`
