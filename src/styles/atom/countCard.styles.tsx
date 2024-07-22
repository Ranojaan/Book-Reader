import styled from "styled-components";

export const CardContainer = styled.div`
    font-family: 'Nunito';
    display: flex;
    width: 240px;
    gap: 10px;
    padding: 10px;
    margin-top:10px;
    margin-left:10px;
    border: 1px solid var(--base-text-color);
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 67px;
  border-radius: 11px;
  background-color: #E4FBE7;
`;

export const Icon = styled.img`
  width: 41px;
  height: 41px;
`;

export const CountLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Count = styled.span`
  font-size: 24px;
  font-weight: var(--font-weight-700);
  margin-left:10px;
`;

export const Label = styled.span`
  font-size: 17px;
  font-weight: var(--font-weight-400);
  color: #8A97A4;
  margin-left:10px;
`;


// import styled from "styled-components";

// export const CardContainer = styled.div`
//     font-family: 'Nunito';
//     display: flex;
//     flex-direction: column; /* Stack items vertically on smaller screens */
//     width: 240px;
//     gap: 10px;
//     padding: 10px;
//     margin: 10px;
//     border: 1px solid var(--base-text-color);
//     border-radius: 16px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//     @media (max-width: 768px) {
//         width: 200px; /* Adjust width for medium screens */
//         padding: 8px; /* Adjust padding for smaller screens */
//     }

//     @media (max-width: 480px) {
//         width: 100%; /* Full width on small screens */
//         padding: 5px;
//         margin: 5px;
//     }
// `;

// export const IconContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 67px;
//   height: 67px;
//   border-radius: 11px;
//   background-color: #E4FBE7;

//   @media (max-width: 768px) {
//     width: 50px; /* Adjust width for medium screens */
//     height: 50px;
//   }

//   @media (max-width: 480px) {
//     width: 40px; /* Adjust width for small screens */
//     height: 40px;
//   }
// `;

// export const Icon = styled.img`
//   width: 41px;
//   height: 41px;

//   @media (max-width: 768px) {
//     width: 30px; /* Adjust icon size for medium screens */
//     height: 30px;
//   }

//   @media (max-width: 480px) {
//     width: 25px; /* Adjust icon size for small screens */
//     height: 25px;
//   }
// `;

// export const CountLabelWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// export const Count = styled.span`
//   font-size: 24px;
//   font-weight: var(--font-weight-700);
//   margin-left: 10px;

//   @media (max-width: 768px) {
//     font-size: 20px; /* Adjust font size for medium screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 18px; /* Adjust font size for small screens */
//   }
// `;

// export const Label = styled.span`
//   font-size: 17px;
//   font-weight: var(--font-weight-400);
//   color: #8A97A4;
//   margin-left: 10px;

//   @media (max-width: 768px) {
//     font-size: 15px; /* Adjust font size for medium screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 14px; /* Adjust font size for small screens */
//   }
// `;
