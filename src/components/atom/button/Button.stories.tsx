import Button from './Button';

export default {
  component: Button,
};

export const PrimaryButton = {
  args: {
    buttonTitle: 'VIEW NOW',
    isActive: true,
    
  },
};

export const MenuButton = {
  args: {
    buttonTitle: 'HOME',
    isActive: false,
  },
};
