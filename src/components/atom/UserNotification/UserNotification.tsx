import {
  Header,
  HeaderLeft,
  HeaderLeftIcon,
  HeaderRight,
  HeaderRightIcon,
  HeaderRightUser,
  HeaderRightUserImage,
  HeaderRightUserInfo,
  HeaderRightUserInfoName,
} from "../../../styles/atom/UserNotification.styles";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CARD_IMAGES } from "../../../assets/images/index";

interface UserNotificationProps {
  userName: string;
  userImage: string;
}

export const UserNotification = ({
  userName,
  userImage,
}: UserNotificationProps) => {
  return (
    <>
      <Header>
        <HeaderLeft>
          <HeaderLeftIcon>
            <NotificationsActiveIcon sx={{ color: "green" }} />
          </HeaderLeftIcon>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightUser>
            <HeaderRightUserImage src={CARD_IMAGES.USERIMAGE} alt="User profile" />
            <HeaderRightUserInfo>
              <HeaderRightUserInfoName>{userName}</HeaderRightUserInfoName>
            </HeaderRightUserInfo>
          </HeaderRightUser>
          <HeaderRightIcon>
            <ArrowDropDownIcon />
          </HeaderRightIcon>
        </HeaderRight>
      </Header>
    </>
  );
};
