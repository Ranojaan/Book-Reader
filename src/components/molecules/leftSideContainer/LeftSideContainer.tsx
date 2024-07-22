import {
  LogoContainer,
  NavbarContainer,
  Sidebar,
  SidebarImage,
} from "../../../styles/molecules/LeftSideContainer.styles";
import { ICON_IMAGE } from "../../../assets/logo/index";
import img from "../../../assets/logo/LeftContainerImage.png";
import { NavBar } from "../NavBarSection/NavBarSection";
const LeftContainer = () => {
  
  return (
    <Sidebar>
      <LogoContainer>
        <img src={ICON_IMAGE.LOGO_IMAGE} alt="Logo" width={121} height={37} />{" "}
      </LogoContainer>


      <NavbarContainer >
        <NavBar />
      </NavbarContainer>

      <SidebarImage>
        <img src={img} alt="Logo" width={158} height={190} />{" "}
      </SidebarImage>
    </Sidebar>
  );
};

export default LeftContainer;
