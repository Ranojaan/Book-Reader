import React from 'react'
import { LeftSection,  NextBookAuthor, NextBookCardWrapper, NextBookImage, NextBookName, NextBookNameAuthorWrapper, NextBookTime  } from '../../../styles/atom/NextBookCard.styles';

interface NextBookCardProps {
    bookImage: string;
    bookName: string;
    bookAuthor: string;
    bookTime: string;
}

export const NextBookCard = ({bookImage, bookName, bookAuthor, bookTime} : NextBookCardProps) => {
  return (
    <> 
        <NextBookCardWrapper>
            <LeftSection>
            <NextBookImage src={bookImage}/>
                 <NextBookNameAuthorWrapper>
                    <NextBookName>{bookName}</NextBookName>
                    <NextBookAuthor>{bookAuthor}</NextBookAuthor>
                </NextBookNameAuthorWrapper>
            </LeftSection>
            <NextBookTime>{bookTime}</NextBookTime>
        </NextBookCardWrapper>
    </>
  )
}
