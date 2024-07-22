import styled from "styled-components";

export const NextBookCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  width: 313px;
  justify-content: space-between;
  align-items: center;
  margin-top:10px;
  border: 1px solid var(--base-text-color);
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background:#FFF;
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
`;

export const NextBookImage = styled.img`
    width: 46px;
    height: 70px;
    border-radius: 8px;
`;

export const NextBookNameAuthorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;

export const NextBookName = styled.div`
    font-family: 'Nunito';
    font-size: 16px;
    font-weight: var(--font-weight-700);
    color: var(--base-book-name-color);
    margin-left: 1rem;
`; 

export const NextBookAuthor = styled.div`
    font-family: 'Nunito';
    font-size: 14px;
    font-weight: var(--font-weight-400);
    color: var(--base-book-author-color);
    margin-left: 1rem;
`;

export const NextBookTime = styled.div`
    font-family: 'Nunito';
    font-size: 14px;
    font-weight: var(--font-weight-400);
    color: var(--base-book-time-color);
`;

// import styled from "styled-components";

// export const NextBookCardWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 0.5rem 1rem;
//   width: 313px;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 10px;
//   border: 1px solid var(--base-text-color);
//   border-radius: 16px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   background: #FFF;

//   @media (max-width: 768px) {
//     width: 100%; /* Full width on medium screens */
//     flex-direction: column; /* Stack items vertically */
//     padding: 0.5rem; /* Adjust padding for smaller screens */
//   }
// `;

// export const LeftSection = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     margin-bottom: 1rem; /* Add bottom margin for spacing on smaller screens */
//   }
// `;

// export const NextBookImage = styled.img`
//   width: 46px;
//   height: 70px;
//   border-radius: 8px;

//   @media (max-width: 768px) {
//     width: 36px; /* Adjust width for smaller screens */
//     height: 60px; /* Adjust height for smaller screens */
//   }
// `;

// export const NextBookNameAuthorWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   margin-left: 1rem;

//   @media (max-width: 768px) {
//     align-items: center; /* Center align text on smaller screens */
//     margin-left: 0; /* Remove margin on smaller screens */
//   }
// `;

// export const NextBookName = styled.div`
//   font-family: 'Nunito';
//   font-size: 16px;
//   font-weight: var(--font-weight-700);
//   color: var(--base-book-name-color);
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 14px; /* Adjust font size for smaller screens */
//     text-align: center; /* Center text on smaller screens */
//   }
// `;

// export const NextBookAuthor = styled.div`
//   font-family: 'Nunito';
//   font-size: 14px;
//   font-weight: var(--font-weight-400);
//   color: var(--base-book-author-color);

//   @media (max-width: 768px) {
//     font-size: 12px; /* Adjust font size for smaller screens */
//     text-align: center; /* Center text on smaller screens */
//   }
// `;

// export const NextBookTime = styled.div`
//   font-family: 'Nunito';
//   font-size: 14px;
//   font-weight: var(--font-weight-400);
//   color: var(--base-book-time-color);

//   @media (max-width: 768px) {
//     font-size: 12px; /* Adjust font size for smaller screens */
//     margin-top: 0.5rem; /* Add margin-top on smaller screens */
//     text-align: center; /* Center text on smaller screens */
//   }
// `;
