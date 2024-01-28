import {useState} from 'react'

import {MdFormatBold, MdFormatItalic, MdFormatUnderlined} from 'react-icons/md'
import {
  BgContainer,
  CardContainer,
  HeadImageWrapper,
  Heading,
  Image,
  StyledTextArea,
  TextAreaContainer,
  Button,
  Line,
} from './styledComponent'

const TextEditor = () => {
  const [isBoldActive, setBoldActive] = useState(false)
  const [isItalicActive, setItalicActive] = useState(false)
  const [isUnderlineActive, setUnderlineActive] = useState(false)

  const handleBoldClick = () => {
    setBoldActive(!isBoldActive)
  }

  const handleItalicClick = () => {
    setItalicActive(!isItalicActive)
  }

  const handleUnderlineClick = () => {
    setUnderlineActive(!isUnderlineActive)
  }

  return (
    <BgContainer>
      <CardContainer>
        <HeadImageWrapper>
          <Heading>Text Editor</Heading>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </HeadImageWrapper>
        <TextAreaContainer>
          <Button
            type="button"
            active={isBoldActive}
            onClick={handleBoldClick}
            data-testid="bold"
          >
            <MdFormatBold />
          </Button>
          <Button
            type="button"
            active={isItalicActive}
            onClick={handleItalicClick}
            data-testid="italic"
          >
            <MdFormatItalic />
          </Button>
          <Button
            type="button"
            active={isUnderlineActive}
            onClick={handleUnderlineClick}
            data-testid="underline"
          >
            <MdFormatUnderlined />
          </Button>
          <Line />
          <StyledTextArea
            placeholder="Enter your text..."
            rows="8"
            cols="50"
            style={{
              fontWeight: isBoldActive ? 'bold' : 'normal',
              fontStyle: isItalicActive ? 'italic' : 'normal',
              textDecoration: isUnderlineActive ? 'underline' : 'none',
            }}
          />
        </TextAreaContainer>
      </CardContainer>
    </BgContainer>
  )
}

export default TextEditor
