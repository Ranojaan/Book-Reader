import styled from 'styled-components';

interface StyledButtonProps {
    isActive?: boolean;
    hasIcon?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    font-family: 'Nunito';
    height:50px;
    width:172px;
    align-items: center;
    margin-left:20px;
    margin-top:15px;
    
    padding: 16px;
    background-color: ${props => (props.isActive ? 'var(--base-primary-color)' : 'var(--base-text-color)')};
    color: ${props => (props.isActive ? 'var(--base-text-color)' : 'var(--base-unSelected-menu-color)')};
    border: 2px solid ${props => (props.isActive ? 'var(--base-primary-color)' : 'var(--base-text-color)')};
    justify-content: ${props => (props.hasIcon ? 'space-between' : 'center')};
    border-radius: 30px;
    font-size: var(--font-button);
    font-weight: var(--font-weight-700);
    gap: 10px;
    cursor: pointer;
    justify-content: flex-start; 
    text-align: left;

    img {
        background-color: ${props => (props.isActive ? 'var(--base-text-color)' : 'transparent')};
        padding: 5px;
        border-radius: 50%;
    }

        @media (max-width: 1200px) {
        width: 150px;  
        height: 45px;  
        font-size: calc(var(--font-button) - 2px); 
        padding: 12px; 
    }

    @media (max-width: 768px) {
        width: 130px;  
        height: 40px;  
        font-size: calc(var(--font-button) - 4px); 
        padding: 10px; 
        margin-left: 10px; 
        margin-top: 10px; 
    }

    @media (max-width: 480px) {
        width: 100px;  
        height: 35px;  
        font-size: calc(var(--font-button) - 6px); 
        padding: 8px; 
        margin-left: 5px; 
        margin-top: 5px; 
    }
`;

export default StyledButton;
