import { GridContainer, LeftSide, Middle, RightSide } from "../../../styles/molecules/Summarysection.styles";
import LeftContainer from "../leftSideContainer/LeftSideContainer";
import MiddleContainer from "../middleContainer/MiddleContainer";
import RightContainer from "../RightSideContainer/RightSideContainer";

const Summary = () => {
  return (
            
      <>
      <GridContainer>
      <LeftSide>
        <LeftContainer />
      </LeftSide>
      <Middle>
        <MiddleContainer />
      </Middle>
      <RightSide>
        <RightContainer />
      </RightSide>
    </GridContainer>
    </>
    
  );
};

export default Summary;


