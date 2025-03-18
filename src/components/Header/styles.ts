import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px 12px 12px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  height: 80px;
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid rgba(6, 10, 38, 0.06);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 20px;
  color: #272727;
  
  .logoIcon, .logoStar {
    font-size: 24px;
  }
  
  .logoStar {
    color: ${theme.colors.primary};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.round};
  width: 540px;
  height: 48px;
`;

export const SearchIcon = styled.div`
  margin-right: 12px;
  color: #BEBFC1;
  font-size: 18px;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.text.secondary};
  
  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ActionButton = styled.button`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const ActionButtonPrimary = styled(ActionButton)`
  background-color: #D8FF00;
  color: ${theme.colors.secondary};
  font-weight: 600;
  border-radius: ${theme.borderRadius.round};
`; 