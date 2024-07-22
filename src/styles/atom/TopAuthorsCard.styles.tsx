import styled from "styled-components";

export const AuthorCircle = styled.div`
    width: 80px;
    height: 80px;
    border-color: var(--base-secondary-color-1);
    border-radius: 50%;
    border-width: 2.5px;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:35px;
`;

export const AuthorImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

export const AuthorName = styled.p`
  font-family: 'Nunito';
  margin-top:10px;
  margin-left:0px;
  font-size: 16px;
  font-weight: var(--font-weight-700);
  color: var(--base-card-text-color);
  text-align:left;
`;


// import styled from "styled-components";

// export const AuthorCircle = styled.div`
//     width: 80px;
//     height: 80px;
//     border-color: var(--base-secondary-color-1);
//     border-radius: 50%;
//     border-width: 2.5px;
//     border-style: solid;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 35px;

//     @media (max-width: 768px) {
//         width: 60px;
//         height: 60px;
//         margin-right: 20px;
//     }

//     @media (max-width: 480px) {
//         width: 50px;
//         height: 50px;
//         margin-right: 15px;
//     }
// `;

// export const AuthorImage = styled.img`
//     width: 70px;
//     height: 70px;
//     border-radius: 50%;

//     @media (max-width: 768px) {
//         width: 50px;
//         height: 50px;
//     }

//     @media (max-width: 480px) {
//         width: 40px;
//         height: 40px;
//     }
// `;

// export const AuthorName = styled.p`
//   font-family: 'Nunito';
//   margin-top: 10px;
//   margin-left: 0px;
//   font-size: 16px;
//   font-weight: var(--font-weight-700);
//   color: var(--base-card-text-color);
//   text-align: left;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }

//   @media (max-width: 480px) {
//     font-size: 12px;
//   }
// `;
