import styled, { css } from "styled-components"

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  background: rgb(52, 152, 219);
`

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.h1`
  color: #fff;
  font-weight: 300;
  text-align: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`

const InputStyle = css`
  padding: 10px;
  background: #1d6fa5;
  color: #fff;
  font-size: 1em;
  border-radius: 4px;
  border: none;

  &:focus {
    outline: none;
    background: #16527a;
  }

  &::placeholder {
    color: #fff;
  }

  font-family: Latino, sans-serif;
  margin-bottom: 10px;
  transition: 0.5s ease all;
`

export const FormInput = styled.input`
  ${InputStyle}
`

export const FormTextArea = styled.textarea`
  ${InputStyle}

  height: 150px;
  resize: none;
`

export const FormButton = styled.button`
  background: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  color: #3498db;
  font-weight: 700;
  font-size: 1em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.5s ease all;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`
