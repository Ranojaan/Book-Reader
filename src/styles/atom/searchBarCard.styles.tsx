import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-left: 10px;
  background-color: #fff;
`;

export const StyledImg = styled.div`
  margin-top: 10px;
`;

export const SearchBar = styled.input`
  width: 492px;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background-color: #ecf0f3;
  outline: none;
  font-size: 18px;
`;

export const StyledSearchIconContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 43px;
  cursor: pointer;
  background: #fff;
  text-align: center;
`;

export const LanguageContainer = styled.div`
 font-family: 'Nunito';  
display: flex;
  align-items: center;
  
`;

export const LanguageText = styled.span`
font-family: 'Nunito';
  margin-right: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const FlagIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0f7fa; /* Adjust as needed */
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
//   margin-left: 10px;
//   background-color: #fff;

//   @media (max-width: 768px) {
//     flex-direction: column; /* Stack items vertically on smaller screens */
//     align-items: flex-start;
//   }
// `;

// export const StyledImg = styled.div`
//   margin-top: 10px;

//   @media (max-width: 768px) {
//     margin-top: 5px; /* Adjust top margin for smaller screens */
//   }
// `;

// export const SearchBar = styled.input`
//   width: 492px;
//   height: 50px;
//   padding: 10px;
//   border: none;
//   border-radius: 30px;
//   background-color: #ecf0f3;
//   outline: none;
//   font-size: 18px;

//   @media (max-width: 768px) {
//     width: 100%; /* Make search bar full width on smaller screens */
//     max-width: 400px; /* Set a maximum width */
//     font-size: 16px; /* Adjust font size */
//   }

//   @media (max-width: 480px) {
//     max-width: 300px; /* Further reduce maximum width on very small screens */
//     font-size: 14px; /* Further adjust font size */
//   }
// `;

// export const StyledSearchIconContainer = styled.div`
//   position: relative;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   right: 43px;
//   cursor: pointer;
//   background: #fff;
//   text-align: center;

//   @media (max-width: 768px) {
//     right: 10px; /* Adjust position for smaller screens */
//     width: 30px;
//     height: 30px;
//   }

//   @media (max-width: 480px) {
//     width: 25px;
//     height: 25px;
//   }
// `;

// export const LanguageContainer = styled.div`
//   font-family: 'Nunito';
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     margin-top: 10px; /* Adjust spacing for smaller screens */
//   }
// `;

// export const LanguageText = styled.span`
//   font-family: 'Nunito';
//   margin-right: 10px;
//   font-size: 18px;
//   font-weight: 600;

//   @media (max-width: 768px) {
//     font-size: 16px; /* Adjust font size for smaller screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 14px; /* Further adjust font size for very small screens */
//   }
// `;

// export const FlagIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #e0f7fa; /* Adjust as needed */
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//   }

//   @media (max-width: 480px) {
//     width: 35px;
//     height: 35px;
//   }
// `;
