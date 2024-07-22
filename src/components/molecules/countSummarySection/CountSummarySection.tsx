import React from 'react'
import { CountCard } from '../../atom/countCard/CountCard'
import { CountSummaryContainer } from '../../../styles/molecules/countSummarySection.styles';

import { CARD_IMAGES as img } from "../../../assets/images/index";

const CountSummary = () => {
  return (
    <div>
        <CountSummaryContainer>
            <CountCard cardCount={20} cardTitle='Read books' cardImage={img.IMAGE_BOOK}></CountCard>
            <CountCard cardCount={20} cardTitle='Authors' cardImage={img.IMAGE_AUTHOR}></CountCard>
            <CountCard cardCount={3} cardTitle='Reading books' cardImage={img.IMAGE_OPEN_BOOK}></CountCard>
        </CountSummaryContainer> 
    </div>
  )
}

export default CountSummary
