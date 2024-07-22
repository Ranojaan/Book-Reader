import { RightbarContainer } from "../../../styles/molecules/RightSideContainer.styles";
import { HeaderCard } from "../../atom/HeaderCard/HeaderCard";
import { DailyWorkCard } from "../../atom/DailyWorkCard/DailyWorkCard";
import { UserNotification } from "../../atom/UserNotification/UserNotification";
import  AudioBookCard  from "../../atom/AudioBookCard/AudioBookCard";
import { NextBooks } from "../NextBooksContainer/NextBooksContainer";

const RightContainer = () => {
  return (
    <RightbarContainer>
      <UserNotification userName="Ranojaan Mahendran" userImage="" />
      <AudioBookCard songName="Wonder" singerName="R.J.Palado" />
      <HeaderCard title="Next Books" description="" />
      <NextBooks />
      <HeaderCard title="Daily Work" description="" />
      <DailyWorkCard />
    </RightbarContainer>
  );
};

export default RightContainer;
