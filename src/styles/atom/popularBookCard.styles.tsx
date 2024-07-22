
import styled from "styled-components";

export const BookCard = styled.div`
    font-family: 'Nunito';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BookImage = styled.img`
    width: 92px;
    height: 140px;
    margin-top: 0; 
    margin-bottom: 8px;
`;

export const BookTitle = styled.p`
    font-family: 'Nunito';
    font-size: 16px;
    font-weight: var(--font-weight-700);
    color: var(--base-card-text-color);
    margin-top: 0; 
    margin-bottom: 8px;
`;

export const BookAuthor = styled.p`
    font-size: 14px;
    font-weight: var(--font-weight-400);
    color: var(--base-card-normal-text-color);
    margin-top: 0; 
    margin-bottom: 0px;
`;

// import styled from "styled-components";

// export const BookCard = styled.div`
//   font-family: 'Nunito';
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem; /* Add padding for better spacing on smaller screens */
//   box-sizing: border-box; /* Include padding in the element's total width and height */

//   @media (max-width: 768px) {
//     padding: 0.5rem; /* Reduce padding on smaller screens */
//   }

//   @media (max-width: 480px) {
//     padding: 0.25rem; /* Further reduce padding on very small screens */
//   }
// `;

// export const BookImage = styled.img`
//   width: 92px;
//   height: 140px;
//   margin-top: 0; 
//   margin-bottom: 8px;

//   @media (max-width: 768px) {
//     width: 70px; /* Adjust width for smaller screens */
//     height: 105px; /* Adjust height for smaller screens */
//   }

//   @media (max-width: 480px) {
//     width: 50px; /* Further adjust width for very small screens */
//     height: 75px; /* Further adjust height for very small screens */
//   }
// `;

// export const BookTitle = styled.p`
//   font-family: 'Nunito';
//   font-size: 16px;
//   font-weight: var(--font-weight-700);
//   color: var(--base-card-text-color);
//   margin-top: 0; 
//   margin-bottom: 8px;

//   @media (max-width: 768px) {
//     font-size: 14px; /* Adjust font size for smaller screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 12px; /* Further adjust font size for very small screens */
//   }
// `;

// export const BookAuthor = styled.p`
//   font-size: 14px;
//   font-weight: var(--font-weight-400);
//   color: var(--base-card-normal-text-color);
//   margin-top: 0; 
//   margin-bottom: 0px;

//   @media (max-width: 768px) {
//     font-size: 12px; /* Adjust font size for smaller screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 10px; /* Further adjust font size for very small screens */
//   }
// `;
