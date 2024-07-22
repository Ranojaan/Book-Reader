import { NextBookCard } from '../../atom/NextBookCard/NextBookCard'
import { BOOK_IMAGES as img } from '../../../assets/books/index'
import { NextBooksSection } from '../../../styles/molecules/NextBooksContainer.styles'


export const NextBooks = () => {
  return (
    <>
        <NextBooksSection>
            <NextBookCard bookImage={img.NEXTBOOK_IMG01} bookName='Fault In Our Stars' bookAuthor='John Green' bookTime='02:20:03'/>
            <NextBookCard bookImage={img.NEXTBOOK_IMG02} bookName='Never Eat Alone' bookAuthor='Keith Ferrazzi' bookTime='02:20:03'/>
            <NextBookCard bookImage={img.NEXTBOOK_IMG03} bookName='The Book Thief' bookAuthor='Markus Zukas' bookTime='02:20:03'/>
        </NextBooksSection>
    </>
  )
}

