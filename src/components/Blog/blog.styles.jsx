import styled from "styled-components"
import { Link } from "gatsby"
import { HeadingSectionStyle, ButtonStyle } from "../../global.styles"

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  background: #fff;
`
export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 10px 0;
`
export const Title = styled.h1`
  ${HeadingSectionStyle}
`
export const Description = styled.p`
  color: rgb(50, 50, 93);
  font-size: 1.2em;
  margin: 0;
`
export const Button = styled(Link)`
  ${ButtonStyle}
`
