
import styled from 'styled-components';

 export const HeaderContainer = styled.div`
  font-family: 'Nunito';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 50px; 
  width: 360px;
  margin-left:20px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-family: 'Nunito';
  font-size: 24px;
  margin: 0;
  padding-right: 20px;
`;

export const ViewAll = styled.a`
  font-family: 'Nunito';
  font-size: 16px;
  color: var(--base-secondary-color-1);
  text-decoration: none;
  cursor: pointer;
`;

// import styled from 'styled-components';

// export const HeaderContainer = styled.div`
//   font-family: 'Nunito';
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px;
//   height: 50px; 
//   width: 100%;  /* Adjust width to be responsive */
//   max-width: 360px; /* Limit maximum width */
//   margin: 10px 20px;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     padding: 12px;
//     height: 45px;
//     margin: 10px 15px;
//   }

//   @media (max-width: 480px) {
//     padding: 8px;
//     height: 40px;
//     margin: 8px 10px;
//     flex-direction: column; /* Stack items vertically on very small screens */
//   }
// `;

// export const Title = styled.h1`
//   font-family: 'Nunito';
//   font-size: 24px;
//   margin: 0;
//   padding-right: 20px;

//   @media (max-width: 768px) {
//     font-size: 20px; /* Smaller font size for medium screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 18px; /* Even smaller font size for small screens */
//     padding-right: 10px; /* Adjust padding */
//   }
// `;

// export const ViewAll = styled.a`
//   font-family: 'Nunito';
//   font-size: 16px;
//   color: var(--base-secondary-color-1);
//   text-decoration: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     font-size: 14px; /* Smaller font size for medium screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 12px; /* Even smaller font size for small screens */
//   }
// `;
