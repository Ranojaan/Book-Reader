import React from 'react';
import  CountSummary  from './CountSummarySection';
import { CARD_IMAGES as img } from '../../../assets/images/index'; // Ensure the path is correct

export default {
  component: CountSummary,
  title: 'Molecules/CountSummary', // Adjust the title based on your Storybook hierarchy
};

export const Default = () => (
  <CountSummary />
);

export const CustomCountSummary = () => (
  <CountSummary />
);
