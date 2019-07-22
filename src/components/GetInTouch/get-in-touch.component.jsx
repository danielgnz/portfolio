import React, { useState } from "react"

import {
  Container,
  ContainerItem,
  Title,
  FormContainer,
  FormInput,
  FormTextArea,
  FormButton,
} from "./get-in-touch.styles"

export const GetInTouch = () => {
  const [state, setState] = useState({
    email: "",
    message: "",
  })

  const handleChange = event => {
    const [name, value] = event.target

    setState({
      ...state,
      [name]: value,
    })
  }

  return (
    <Container id="contact">
      <ContainerItem>
        <Title>Get in Touch</Title>
      </ContainerItem>

      <ContainerItem>
        <FormContainer method="POST">
          <FormInput
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Your email"
            required
          />
          <FormTextArea
            name="message"
            onChange={handleChange}
            placeholder="Your message"
            required
          />
          <FormButton type="submit">Send</FormButton>
        </FormContainer>
      </ContainerItem>
    </Container>
  )
}

export default GetInTouch
