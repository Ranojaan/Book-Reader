// import styled from "styled-components";

// export const NowPlayingCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0.5rem 1rem 0.5rem 0.5rem;
//   width: 313px;
//   height: 331px;
//   justify-content: space-between;
//   align-items: center;
//   margin: 2rem 0;
//   border: 1px solid var(--base-text-color);
//   border-radius: 16px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-left: 10px;
//   margin-top: 60px;
//   background-color: #fff;
// `;

// export const SongImagesWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: row;
//   justify-content: space-around;
//   width: 100%;
//   margin-bottom: 1rem;
// `;

// export const NextPrevImage = styled.img`
//   width: 67px;
//   height: 100px;
// `;

// export const NowPlayingImage = styled.img`
//   width: 90px;
//   height: 135px;
// `;

// export const SongName = styled.div`
//   font-family: "Nunito";
//   justify-content: center;
//   font-size: 20px;
//   font-weight: 700px;
//   margin-top: 0px;
// `;

// export const BackgroundImageWrapper = styled.img`
//   width: 260px;
//   height: 83.2px;
// `;

// export const SingerName = styled.div`
//   font-family: "Nunito";
//   justify-content: center;
//   font-size: 14px;
//   font-weight: 400px;
//   margin-top: 5px;
// `;

// export const PlayButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: space-between;
//   width: 100%;
//   margin-bottom: 1rem;
//   margin-top: 30px;
//   margin-left: -30px;
// `;

// export const NextPrevButton = styled.div`
//   background-color: #d6f5e1;

//   border-radius: 50%;
//   border-color: var(--base-secondary-color-1);
//   border-radius: 50%;
//   border-width: 2px;
//   border-style: solid;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   margin-left: 15px;
// `;

// export const NextPrevIconImage = styled.img`
//   width: 16px;
//   height: 16px;
// `;

// export const WAVEIMAGE = styled.img`
//   width: 200px;
//   height: 160px;
  
  
// `;

// export const StyledImg_1 = styled.div`
//   width: 313px;
//   height: 80px;
//   margin-top: 173px;
//   opacity: 0.5;
// `;

// export const StyledImg_2 = styled.div`
//   width: 260px;
//   height: 80px;
//   margin-top: 1120px;
// `;


import styled from "styled-components";

export const NowPlayingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  width: 313px;
  height: 331px;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  border: 1px solid var(--base-text-color);
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  margin-top: 20px;
  background-color: #fff;
  position: relative; /* Ensure that child elements can be positioned absolutely */
`;

export const SongImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1rem;
`;

export const NextPrevImage = styled.img`
  width: 67px;
  height: 100px;
`;

export const NowPlayingImage = styled.img`
  width: 90px;
  height: 135px;
`;

export const SongName = styled.div`
  font-family: "Nunito";
  font-size: 20px;
  font-weight: 700;
  color: black;
  position: absolute;
  top: 20px; 
  left: 65px; 
  z-index: 1; 
`;

export const SingerName = styled.div`
  font-family: "Nunito";
  font-size: 14px;
  font-weight: 400;
  color: Black;
  position: absolute;
  top: 50px; 
  left: 70px; 
  z-index: 1; 
`;

export const WaveImageWrapper = styled.div`
  width: 200px;
  height: 160px;
  position: relative;
`;

export const WAVEIMAGE = styled.img`
  width: 100%;
  height: 100%;
`;

export const PlayButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 30px;
  margin-left: -30px;
`;

export const NextPrevButton = styled.div`
  background-color: #d6f5e1;
  border-radius: 50%;
  border-color: var(--base-secondary-color-1);
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 15px;
`;

export const NextPrevIconImage = styled.img`
  width: 16px;
  height: 16px;
`;


// import styled from "styled-components";

// export const NowPlayingCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0.5rem 1rem 0.5rem 0.5rem;
//   width: 313px;
//   height: 331px;
//   justify-content: space-between;
//   align-items: center;
//   margin: 2rem 0;
//   border: 1px solid var(--base-text-color);
//   border-radius: 16px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-left: 10px;
//   margin-top: 20px;
//   background-color: #fff;
//   position: relative;

//   @media (max-width: 768px) {
//     width: 100%; /* Full width on smaller screens */
//     height: auto; /* Adjust height automatically */
//     margin-left: 0;
//     margin-top: 10px;
//   }
// `;

// export const SongImagesWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: row;
//   justify-content: space-around;
//   width: 100%;
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column; /* Stack images vertically on smaller screens */
//     align-items: center;
//     margin-bottom: 0.5rem;
//   }
// `;

// export const NextPrevImage = styled.img`
//   width: 67px;
//   height: 100px;

//   @media (max-width: 768px) {
//     width: 50px;
//     height: 75px;
//   }
// `;

// export const NowPlayingImage = styled.img`
//   width: 90px;
//   height: 135px;

//   @media (max-width: 768px) {
//     width: 70px;
//     height: 105px;
//   }
// `;

// export const SongName = styled.div`
//   font-family: "Nunito";
//   font-size: 20px;
//   font-weight: 700;
//   color: black;
//   position: absolute;
//   top: 20px; 
//   left: 65px; 
//   z-index: 1; 

//   @media (max-width: 768px) {
//     font-size: 18px;
//     top: 10px;
//     left: 10px;
//   }
// `;

// export const SingerName = styled.div`
//   font-family: "Nunito";
//   font-size: 14px;
//   font-weight: 400;
//   color: black;
//   position: absolute;
//   top: 50px; 
//   left: 70px; 
//   z-index: 1; 

//   @media (max-width: 768px) {
//     font-size: 12px;
//     top: 35px;
//     left: 10px;
//   }
// `;

// export const WaveImageWrapper = styled.div`
//   width: 200px;
//   height: 160px;
//   position: relative;

//   @media (max-width: 768px) {
//     width: 150px;
//     height: 120px;
//   }
// `;

// export const WAVEIMAGE = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// export const PlayButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: space-between;
//   width: 100%;
//   margin-bottom: 1rem;
//   margin-top: 30px;
//   margin-left: -30px;

//   @media (max-width: 768px) {
//     margin-left: 0;
//     margin-top: 15px;
//   }
// `;

// export const NextPrevButton = styled.div`
//   background-color: #d6f5e1;
//   border-radius: 50%;
//   border-color: var(--base-secondary-color-1);
//   border-width: 2px;
//   border-style: solid;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   margin-left: 15px;

//   @media (max-width: 768px) {
//     width: 35px;
//     height: 35px;
//     margin-left: 10px;
//   }
// `;

// export const NextPrevIconImage = styled.img`
//   width: 16px;
//   height: 16px;

//   @media (max-width: 768px) {
//     width: 14px;
//     height: 14px;
//   }
// `;
