import styled from "styled-components";

export const DailyBookCardWrapper = styled.div`
  font-family: 'Nunito';
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 313px;
  height: 110px;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-top:10px;
`;

export const TitleImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTitle = styled.div`
    font-family: 'Nunito';
    font-size: 20px;
    font-weight: bold;
    color: var(--base-secondary-color-1);
`;

export const CardImage = styled.img`
    margin-top: 8px;
    width: 80px;
    height: 53px;
`;

export const BookProgress = styled.div`
    font-family: 'Nunito';
    width: 70px;
    height: 70px;
`;

// import styled from "styled-components";

// export const DailyBookCardWrapper = styled.div`
//   font-family: 'Nunito';
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
//   width: 313px;
//   height: 110px;
//   border-radius: 16px;
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
//   background-color: #ffffff;
//   margin-top: 10px;

//   @media (max-width: 768px) {
//     width: 100%; /* Full width on medium screens */
//     height: auto; /* Adjust height automatically */
//     flex-direction: column; /* Stack items vertically on smaller screens */
//     padding: 10px;
//   }
// `;

// export const TitleImageSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   @media (max-width: 768px) {
//     align-items: center; /* Center items horizontally on smaller screens */
//   }
// `;

// export const CardTitle = styled.div`
//   font-family: 'Nunito';
//   font-size: 20px;
//   font-weight: bold;
//   color: var(--base-secondary-color-1);

//   @media (max-width: 768px) {
//     font-size: 18px; /* Adjust font size for medium screens */
//     text-align: center; /* Center text on smaller screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 16px; /* Adjust font size for small screens */
//   }
// `;

// export const CardImage = styled.img`
//   margin-top: 8px;
//   width: 80px;
//   height: 53px;

//   @media (max-width: 768px) {
//     width: 60px; /* Adjust width for medium screens */
//     height: 40px; /* Adjust height for medium screens */
//   }

//   @media (max-width: 480px) {
//     width: 50px; /* Adjust width for small screens */
//     height: 35px; /* Adjust height for small screens */
//   }
// `;

// export const BookProgress = styled.div`
//   font-family: 'Nunito';
//   width: 70px;
//   height: 70px;

//   @media (max-width: 768px) {
//     width: 50px; /* Adjust width for medium screens */
//     height: 50px; /* Adjust height for medium screens */
//   }

//   @media (max-width: 480px) {
//     width: 40px; /* Adjust width for small screens */
//     height: 40px; /* Adjust height for small screens */
//   }
// `;
