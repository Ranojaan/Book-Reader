import styled from "styled-components";


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 50px; 
  width: 360px;
  margin-top:25px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height:50px;
  border-radius:100px;
  background-color: #FFF;
  margin-top:35px;
`;

export const HeaderLeftIcon = styled.span`
  font-size: 24px;
  color: #f44336;
  margin-right: 8px;
  width: 25px;
  height: 26px;
  margin-left: 12px;
  margin-top:0px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  width: 243px;
  height: 60px;
  background-color: #FFF;
  border-radius: 15px;
  margin-top:32px;
`;

export const HeaderRightUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;


export const HeaderRightUserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
`;

export const HeaderRightUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const HeaderRightUserInfoName = styled.span`
  font-family: 'Nunito';
  font-weight: bold;
  font-size: 14px;
  color: #1b1f2a;
`;

export const HeaderRightUserInfoPlan = styled.span`
  font-size: 12px;
  color: #6c757d;
`;

export const HeaderRightIcon = styled.span`
  font-size: 20px;
  color: #6c757d;
`;

// import styled from "styled-components";

// export const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px;
//   height: 50px; 
//   width: 100%; /* Full width on smaller screens */
//   max-width: 360px; /* Limit max-width for larger screens */
//   margin-top: 25px;

//   @media (max-width: 768px) {
//     padding: 12px;
//     flex-direction: column; /* Stack items vertically on smaller screens */
//     align-items: flex-start; /* Align items to the start on smaller screens */
//     margin-top: 15px;
//   }
// `;

// export const HeaderLeft = styled.div`
//   display: flex;
//   align-items: center;
//   width: 50px;
//   height: 50px;
//   border-radius: 100px;
//   background-color: #FFF;
//   margin-top: 35px;

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//     margin-top: 20px;
//   }
// `;

// export const HeaderLeftIcon = styled.span`
//   font-size: 24px;
//   color: #f44336;
//   margin-right: 8px;
//   width: 25px;
//   height: 26px;
//   margin-left: 12px;
//   margin-top: 0px;

//   @media (max-width: 768px) {
//     font-size: 20px;
//     width: 20px;
//     height: 22px;
//     margin-left: 8px;
//   }
// `;

// export const HeaderRight = styled.div`
//   display: flex;
//   align-items: center;
//   width: 243px;
//   height: 60px;
//   background-color: #FFF;
//   border-radius: 15px;
//   margin-top: 32px;

//   @media (max-width: 768px) {
//     width: 100%; /* Full width on smaller screens */
//     height: auto; /* Adjust height automatically */
//     margin-top: 15px;
//     flex-direction: column; /* Stack items vertically on smaller screens */
//     align-items: flex-start; /* Align items to the start on smaller screens */
//     padding: 10px; /* Adjust padding for smaller screens */
//   }
// `;

// export const HeaderRightUser = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 16px;

//   @media (max-width: 768px) {
//     margin-right: 10px;
//   }
// `;

// export const HeaderRightUserImage = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-left: 15px;

//   @media (max-width: 768px) {
//     width: 30px;
//     height: 30px;
//     margin-left: 10px;
//   }
// `;

// export const HeaderRightUserInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 8px;

//   @media (max-width: 768px) {
//     margin-left: 5px;
//   }
// `;

// export const HeaderRightUserInfoName = styled.span`
//   font-family: 'Nunito';
//   font-weight: bold;
//   font-size: 14px;
//   color: #1b1f2a;

//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// export const HeaderRightUserInfoPlan = styled.span`
//   font-size: 12px;
//   color: #6c757d;

//   @media (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// export const HeaderRightIcon = styled.span`
//   font-size: 20px;
//   color: #6c757d;

//   @media (max-width: 768px) {
//     font-size: 18px;
//   }
// `;
