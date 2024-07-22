import {
  HeaderContainer,
  Title,
  ViewAll,
} from "../../../styles/atom/HeaderCard.styles";

import PropTypes from "prop-types";
interface CommonHeaderProps {
  title: string;
  description: string;
}

export const HeaderCard = ({ title, description }: CommonHeaderProps) => {
  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title>{title}</Title>
        <ViewAll href="#">{description}</ViewAll>
      </div>
    </HeaderContainer>
  );
};

HeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
};
