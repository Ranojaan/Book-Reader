import React from 'react';
import StyledButton from '../../../styles/atom/button.styles';

interface ButtonProps {
  buttonTitle: string;
  isActive: boolean;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonTitle, isActive, icon }) => {
  return (
    <StyledButton isActive={isActive} hasIcon={!!icon}>
      {icon && <img src={icon} alt="icon" />}
      {buttonTitle}
    </StyledButton>
  );
};

export default Button;
