import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Wrapper, Left, Title, Photo } from "./Hero.js";
import photo from "../../images/hero-photo.webp";
import { Container } from "../Container/Container.jsx";

export const Hero = ({ addNumber }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>PhoneBook</Title>
          <ContactForm addNumber={addNumber} />
        </Left>
        <Photo src={photo} alt="phone booth" />
      </Wrapper>
    </Container>
  );
};
