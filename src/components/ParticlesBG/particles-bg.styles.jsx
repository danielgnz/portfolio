import styled from "styled-components"

export const Wrapper = styled.div`
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  bottom: 0;
  height: 50%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`
