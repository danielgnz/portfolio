import styled from "styled-components"

import { HeadingSectionStyle, ButtonStyle } from "../../global.styles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`

export const ContainerItem = styled.div`
  margin: 0.5em 0;
  display: flex;
  justify-content: center;
`

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const TitleWrapper = styled.div`
  text-align: center;
  width: 90%;
`

export const Title = styled.h1`
  ${HeadingSectionStyle}
`

export const LoadProjectsButton = styled.div`
  ${ButtonStyle}
`
