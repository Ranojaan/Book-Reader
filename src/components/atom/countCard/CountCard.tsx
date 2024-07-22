import { CardContainer, Count, Icon, Label, CountLabelWrapper, IconContainer } from '../../../styles/atom/countCard.styles';

interface CountCardProps {
    cardCount: number;
    cardTitle: string;
    cardImage: string;
}

export const CountCard = ({cardCount, cardTitle, cardImage} : CountCardProps) => {
  return (
    <> 
        <CardContainer>
            <IconContainer>
            <Icon src={cardImage}></Icon>
            </IconContainer>
            <CountLabelWrapper>
                <Count>{cardCount}</Count>
                <Label>{cardTitle}</Label>
            </CountLabelWrapper>
        </CardContainer>
    </>
  )
}
