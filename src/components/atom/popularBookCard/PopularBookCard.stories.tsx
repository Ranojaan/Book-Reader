import { PopularBookCard } from './PopularBookCard';
import Popular2 from '../../../assets/books/Popular2.png'

export default {
  component: PopularBookCard,
};

export const Primary = {
  args: {
    bookTitle: 'Great Gasby',
    authorName: 'F.Scott Fitzgerald',
    bookImg: Popular2, 
  },
};

export const CustomBookCard = {
  args: {
    bookTitle: ' Book Title',
    authorName: 'Author',
    bookImg: 'https://via.placeholder.com/92x140', // Replace with an actual image URL
  },
};
