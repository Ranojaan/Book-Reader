import { NextBookCard } from './NextBookCard';
import NextBook2 from '../../../assets/books/NextBook2.png'
import NextBook3 from '../../../assets/books/NextBook3.png'


export default {
  component: NextBookCard,
};

export const Primary = {
  args: {
    bookImage: NextBook2, 
    bookName: 'Never Eat Alone',
    bookAuthor: 'Keith Ferrazzi',
    bookTime: '02:20:03',
  },
};

export const CustomNextBook = {
  args: {
    bookImage: NextBook3 , 
    bookName: 'The Book Thief',
    bookAuthor: 'Markus Zukasr',
    bookTime: '02:20:03',
  },
};
