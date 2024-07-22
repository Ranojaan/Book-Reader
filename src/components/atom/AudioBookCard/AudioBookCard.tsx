import React from "react";
import {
  NextPrevButton,
  NextPrevIconImage,
  NextPrevImage,
  NowPlayingCardWrapper,
  NowPlayingImage,
  PlayButtonWrapper,
  SongImagesWrapper,
  SongName,
  SingerName,
  WAVEIMAGE,
  WaveImageWrapper
} from "../../../styles/atom/AudioBookCard.styles";
import { CARD_IMAGES  } from "../../../assets/images/index";

interface SongCardProps {
  singerName: string;
  songName: string;
}

const SongCard = ({ songName, singerName }: SongCardProps) => {
  return (
    <NowPlayingCardWrapper> 
        
      <SongImagesWrapper>
        <NextPrevImage src={CARD_IMAGES.IMAGE_01} alt="Next" />
        <NowPlayingImage src={CARD_IMAGES.IMAGE_02} alt="Now Playing" />
        <NextPrevImage src={CARD_IMAGES.IMAGE_03} alt="Previous" />
      </SongImagesWrapper>
      
      {/* <WAVEIMAGE src={CARD_IMAGES.WAVEIMAGE} alt='wave' />
      <SongName>{songName}</SongName>
      <SingerName>{singerName}</SingerName> */}
      <WaveImageWrapper>
        <WAVEIMAGE src={CARD_IMAGES.WAVEIMAGE} alt="wave" />
        <SongName>{songName}</SongName>
        <SingerName>{singerName}</SingerName>
      </WaveImageWrapper>

      <PlayButtonWrapper>
        
        <NextPrevButton>
          <NextPrevIconImage src={CARD_IMAGES.PREV} alt="Play" />
        </NextPrevButton>
        <NextPrevButton>
          <NextPrevIconImage src={CARD_IMAGES.PAUSE} alt="Play" />
        </NextPrevButton>
        <NextPrevButton>
          <NextPrevIconImage src={CARD_IMAGES.NEXT} alt="Play" />
        </NextPrevButton>
      </PlayButtonWrapper>
    </NowPlayingCardWrapper>
  );
};

export default SongCard;
