import  SongCard  from './AudioBookCard';
import { CARD_IMAGES } from '../../../assets/images/index';

export default {
  component: SongCard,
};

export const Primary = {
  args: {
    songName: 'Wonder',
    singerName: 'R.J.Palado',
    
    cardImages: {
      IMAGE_01: CARD_IMAGES.IMAGE_01,
      IMAGE_02:CARD_IMAGES.IMAGE_02,
      IMAGE_03: CARD_IMAGES.IMAGE_03,
      WAVEIMAGE: CARD_IMAGES.WAVEIMAGE,
      PREV: CARD_IMAGES. PREV,
      PAUSE: CARD_IMAGES.PAUSE,
      NEXT: CARD_IMAGES.NEXT,
    }
  },
};
