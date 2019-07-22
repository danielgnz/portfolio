import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(82, 95, 127, 0.9);
  transition: all 0.3s ease;
`

export const Card = styled(Link)`
  position: relative;
  text-decoration: none;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 600px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin: 10px;
  }

  &:hover {
    ${Wrapper} {
      opacity: 1;
    }
  }

  transition: all 0.25s ease 0s;
`

export const TitleWrapper = styled.div`
  margin: 10px;
  color: #fff;
`

export const SubTitle = styled.p`
  margin: 0;
  font-size: 0.8em;
`

export const Title = styled.h2`
  margin: 0;
  color: #fff;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.div`
  margin: 10px;
  color: #fff;
  font-size: 0.9em;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 0.5em 1em;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: rgb(52, 152, 219);
  }
`
