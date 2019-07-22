import styled from "styled-components"

import { HeadingSectionStyle } from "../../global.styles"

export const Container = styled.div`
  padding: 2rem 1rem;
  background: rgb(245, 245, 245);
`

export const Title = styled.h1`
  ${HeadingSectionStyle}
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`
export const ListItem = styled.p`
  margin-right: 10px;
  background: #fff;
  color: #374054;
  padding: 5px 10px;
  font-size: 1.2em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`
