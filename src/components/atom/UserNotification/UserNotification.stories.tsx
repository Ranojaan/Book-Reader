import { UserNotification } from './UserNotification';
import { CARD_IMAGES } from '../../../assets/images/index';

export default {
  component: UserNotification,
};

export const Primary = {
  args: {
    userName: 'Ranojaan Mahendran',
    userImage: CARD_IMAGES.USERIMAGE, 
  },
};

export const CustomUserNotification = {
  args: {
    userName: 'Jane Smith',
    userImage: 'https://via.placeholder.com/40x40', 
  },
};
