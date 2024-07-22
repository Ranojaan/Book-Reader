import React from 'react'
import { AuthorCircle, AuthorImage, AuthorName } from '../../../styles/atom/TopAuthorsCard.styles';

interface TopAuthorCardProps {
  authorName: string,
  authorImage: string
}

export const TopAuthorCard = ({authorName, authorImage}: TopAuthorCardProps) => {
  return (
    <div>
      <AuthorCircle>
        <AuthorImage src={authorImage} alt="author" />
      </AuthorCircle>
      <AuthorName>{authorName}</AuthorName>
    </div>
  )
}