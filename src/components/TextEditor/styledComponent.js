import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #25262c;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #1b1c22;
  border-radius: 8px;
  align-items: center;
`

export const HeadImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-height: 80vh;
`

export const Heading = styled.h1`
  text-align: center;
  color: #fff;
`

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  margin: auto;
`

export const TextAreaContainer = styled.div`
  border: solid 1px #cbd5e1;
  width: 50%;
  margin: 20px;
  border-radius: 8px;
  min-height: 80vh;
`
export const Button = styled.button`
  margin: 5px;
  padding: 5px;
  font-weight: ${({active}) => (active ? 'bold' : 'normal')};
  font-style: ${({active}) => (active ? 'italic' : 'normal')};
  text-decoration: ${({active}) => (active ? 'underline' : 'none')};
  background-color: ${({active}) => (active ? '#faff00' : '#f1f5f9')};
`

export const Line = styled.hr`
  width: 100%;
  border: solid 1px #cbd5e1;
`
export const StyledTextArea = styled.textarea`
  height: 100px; /* You can adjust the height as needed */
  resize: none;
  margin-bottom: 10px;
  border: none;
  outline: none;
  margin-left: 10px;
  color: #fff;
  background-color: transparent;
`
