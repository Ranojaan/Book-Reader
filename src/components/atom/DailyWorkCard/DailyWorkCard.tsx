import { buildStyles,CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BookProgress, CardImage, CardTitle, DailyBookCardWrapper, TitleImageSection } from '../../../styles/atom/DailyWorkCard.styles'
import { CARD_IMAGES as img } from '../../../assets/images'

export const DailyWorkCard = () => {
  return (
    <>
      <DailyBookCardWrapper>
        <TitleImageSection>
          <CardTitle>Books this week</CardTitle>
          <CardImage src={img.IMAGE_CLOSE_BOOK} alt="Card Image" /> 
        </TitleImageSection>
          <BookProgress>
            <CircularProgressbar 
              value={66.66} 
              text={`3/5`} 
              counterClockwise={true}  
              styles={buildStyles({
                textColor: "#27A857", 
                textSize: "20px",
                pathColor: "#27A857",
              })}
              /> 
          </BookProgress>
      </DailyBookCardWrapper> 
    </>
  )
}
