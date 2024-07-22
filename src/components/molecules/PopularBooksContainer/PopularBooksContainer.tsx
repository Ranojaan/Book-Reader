import { PopularBookCard } from '../../atom/popularBookCard/PopularBookCard'
import { PopularBooksSection } from '../../../styles/molecules/PopularBooksContainer.styles'
import {BOOK_IMAGES as Img} from '../../../assets/books/index';

export const TopBooks = () => {
  return (
    <PopularBooksSection>
        <PopularBookCard authorName='Keith Ferrazzi' bookTitle='Never eat alone' bookImg={Img.POPULAR_BOOK_01}/>
        <PopularBookCard authorName='F.Scott Fitzgerald' bookTitle='Great Gasby' bookImg={Img.POPULAR_BOOK_02}/>
        <PopularBookCard authorName='Yuval Noah Harari' bookTitle='Sapiens' bookImg={Img.POPULAR_BOOK_03}/>
        <PopularBookCard authorName='Markus Zukas' bookTitle='The Book Thief' bookImg={Img.POPULAR_BOOK_04}/>
        <PopularBookCard authorName='Conan Doyle' bookTitle='Sherlock Holmes' bookImg={Img.POPULAR_BOOK_05}/>
    </PopularBooksSection>
  )
}
