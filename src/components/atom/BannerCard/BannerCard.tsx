import React from "react";
import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  Image,
  ImageContainer1,
  ImageContainer2,
} from "../../../styles/atom/BannerCard.styles"; 
import Button from "../button/Button";
import { CARD_IMAGES as Img } from "../../../assets/images/index";

export const BannerCard = () => {
  return (
    <Container>
      <TextContainer>
        <Title>TRENDING BOOKS THIS MONTH</Title>
        <Subtitle>Listen to trending books in this months</Subtitle>

        <Button buttonTitle="VIEW NOW" isActive={true} icon="" />
      </TextContainer>
      <ImageContainer1>
        <ImageContainer2>
          <Image src={Img.HUMAN} alt="Books" />
        </ImageContainer2>
        <Image src={Img.BOOKS} alt="Human" />{" "}
      </ImageContainer1>
    </Container>
  );
};
