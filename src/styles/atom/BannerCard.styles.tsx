import styled from "styled-components";
import { CARD_IMAGES as Img } from "../../assets/images/index";

export const Container = styled.div`
  font-family: "Nunito";
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #28a745;
  border-radius: 24px;
  padding: 10px;
  color: white;
  margin-top: 60px;
  margin-left: 20px;
  width: 775px;
  height: 280px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div`
  width: 300px;
  height: 80px;
  margin-top: 35px;
  margin-left: 20px;
`;

export const Title = styled.h2`
  font-family: "LeMonde Livre";
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #ff5722;
  width: 140px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e64a19;
  }
  margin-left: 10px;
`;

// export const ImageContainer1 = styled.div`
//   flex: 1;
//   width: 300px;
//   height: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 100x;
//   margin-top: 20px;
//   background-image: url(${Img.BOOKS});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

// export const ImageContainer2 = styled.div`
//   flex: 1;
//   width: 107px;
//   height: 180px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 120px;
//   margin-top: 80px;
//   background-image: url(${Img.HUMAN});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
  
// `;

export const ImageContainer1 = styled.div`
  flex: 1;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;  
  margin-left: 10px;
  margin-top: 60px;
  background-image: url(${Img.BOOKS});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImageContainer2 = styled.div`
  width: 107px;
  height: 180px;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-30%, -20%); 
  background-image: url(${Img.HUMAN});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;


export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

// import styled from "styled-components";
// import { CARD_IMAGES as Img } from "../../assets/images/index";

// export const Container = styled.div`
//   font-family: "Nunito";
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
//   background-color: #28a745;
//   border-radius: 24px;
//   padding: 10px;
//   color: white;
//   margin-top: 60px;
//   margin-left: 20px;
//   width: 100%;
//   max-width: 775px;
//   height: auto;
//   box-sizing: border-box;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     flex-direction: column;
//     width: 100%;
//     height: auto;
//   }
// `;

// export const TextContainer = styled.div`
//   width: 100%;
//   max-width: 300px;
//   height: auto;
//   margin-top: 35px;
//   margin-left: 20px;

//   @media (max-width: 768px) {
//     width: 90%;
//     margin-left: 10px;
//   }
// `;

// export const Title = styled.h2`
//   font-family: "LeMonde Livre";
//   font-size: 24px;
//   font-weight: bold;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 20px;
//   }

//   @media (max-width: 480px) {
//     font-size: 18px;
//   }
// `;

// export const Subtitle = styled.p`
//   font-size: 16px;
//   margin-top: 20px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }

//   @media (max-width: 480px) {
//     font-size: 12px;
//   }
// `;

// export const Button = styled.button`
//   background-color: #ff5722;
//   width: 140px;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   margin-left: 10px;

//   &:hover {
//     background-color: #e64a19;
//   }

//   @media (max-width: 768px) {
//     width: 120px;
//     font-size: 14px;
//     padding: 8px 16px;
//   }

//   @media (max-width: 480px) {
//     width: 100px;
//     font-size: 12px;
//     padding: 6px 12px;
//   }
// `;

// export const ImageContainer1 = styled.div`
//   flex: 1;
//   width: 100px;
//   height: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;  
//   margin-left: 10px;
//   margin-top: 60px;
//   background-image: url(${Img.BOOKS});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;

//   @media (max-width: 768px) {
//     width: 80px;
//     height: 80px;
//     margin-top: 30px;
//   }

//   @media (max-width: 480px) {
//     width: 60px;
//     height: 60px;
//     margin-top: 20px;
//   }
// `;

// export const ImageContainer2 = styled.div`
//   width: 107px;
//   height: 180px;
//   position: absolute; 
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-image: url(${Img.HUMAN});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;

//   @media (max-width: 768px) {
//     width: 80px;
//     height: 120px;
//     transform: translate(-25%, -10%);
//   }

//   @media (max-width: 480px) {
//     width: 60px;
//     height: 90px;
//     transform: translate(-20%, -5%);
//   }
// `;

// export const Image = styled.img`
//   max-width: 100%;
//   height: auto;
// `;
