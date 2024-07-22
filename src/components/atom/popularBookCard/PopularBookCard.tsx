import React from 'react'
import { BookAuthor, BookCard, BookImage, BookTitle } from '../../../styles/atom/popularBookCard.styles'



interface PopularBookCardProps {
    bookTitle: string;
    authorName: string;
    bookImg: string;
};

export const PopularBookCard = ({bookTitle, authorName,bookImg}: PopularBookCardProps) => {
  return (
    <BookCard>
        <BookImage src={bookImg} alt="book" />
        <BookTitle>{bookTitle}</BookTitle>
        <BookAuthor>{authorName}</BookAuthor>
    </BookCard>
  )
}
