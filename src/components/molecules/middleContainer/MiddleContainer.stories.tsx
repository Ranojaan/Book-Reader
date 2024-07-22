import React from 'react';
import MiddleContainer from './MiddleContainer'; 
import { CARD_IMAGES } from '../../../assets/images/index';


const mockData = {
  countryName: 'EN',
  flagImage: CARD_IMAGES.FLAGIMAGE,
};

export default {
  component: MiddleContainer,
  title: 'Molecules/MiddleContainer', 
};

export const Default = () => (
  <MiddleContainer />
);
