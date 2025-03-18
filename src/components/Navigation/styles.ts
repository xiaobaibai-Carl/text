import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 72px;
  width: 100%;
  margin-top: 20px;
`;

export const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 240px;
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 0 12px 24px;
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  color: ${theme.colors.text.secondary};
  text-align: left;
  background-color: ${theme.colors.lightGray};
  border-radius: 0;
  
  &:hover {
    background-color: rgba(245, 245, 245, 0.8);
  }
`;

export const NavItemActive = styled(NavItem)`
  color: ${theme.colors.text.primary};
  background-color: #FDEDED;
  font-weight: 500;
  padding: 12px 0 12px 20px;
`;

export const AiButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: linear-gradient(135deg, #C1FFDE 0%, #B0EDFB 59.5%, #C7C2FF 100%);
  border-radius: ${theme.borderRadius.round};
  width: 48px;
  height: 24px;
  padding: 4px 6px;
  margin-left: 81px;
  margin-top: 12px;
  
  .icon {
    color: ${theme.colors.text.primary};
    font-size: 14px;
  }
  
  .text {
    color: ${theme.colors.text.primary};
    font-size: 12px;
    font-weight: bold;
  }
`; 