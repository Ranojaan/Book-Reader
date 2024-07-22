import  SearchBarCard  from './SearchBarCard';
import SearchIconImage from '../../../assets/logo/searchIcon.png'; 
import Flag from '../../../assets/images/EngFlagImage.png';

export default {
  component: SearchBarCard,
};

export const Default = {
  args: {
    countryName: 'United Kingdom',
    flagImage: Flag, 
  },
};

export const CustomSearchBarCard = {
  args: {
    countryName: 'France',
    flagImage: 'https://via.placeholder.com/50x50', 
  },
};
