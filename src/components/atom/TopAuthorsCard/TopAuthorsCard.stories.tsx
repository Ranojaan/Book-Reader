import {TopAuthorCard}   from './TopAuthorsCard';
import Markus from '../../../assets/authors/MarkusZukas.png'

export default {
  component: TopAuthorCard,
};

export const Primary = {
  args: {
    authorName: 'Markus Zukas',
    authorImage: Markus, 
  },
};

export const CustomAuthorCard = {
  args: {
    authorName: 'Author',
    authorImage: 'https://via.placeholder.com/70x70', // Replace with an actual author image URL
  },
};
