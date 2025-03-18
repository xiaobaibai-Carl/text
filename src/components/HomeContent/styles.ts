import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  gap: 64px;
  margin-top: 40px;
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const HeroTitle = styled.h1`
  font-family: 'MiSans VF', sans-serif;
  font-size: ${theme.fontSizes.xxl};
  font-weight: 450;
  color: ${theme.colors.secondary};
  margin-bottom: 20px;
  line-height: 1.32;
`;

export const HeroSubtitle = styled.p`
  font-family: 'MiSans VF', sans-serif;
  font-size: ${theme.fontSizes.lg};
  font-weight: 380;
  color: ${theme.colors.text.secondary};
  line-height: 1.32;
`;

export const CounterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  position: absolute;
  right: 0;
`;

export const CounterLabel = styled.span`
  font-family: 'MiSans VF', sans-serif;
  font-size: ${theme.fontSizes.md};
  font-weight: 330;
  color: #8B8B8B;
  letter-spacing: 2%;
  text-align: right;
`;

export const CounterValue = styled.span`
  font-family: 'MiSans VF', sans-serif;
  font-size: ${theme.fontSizes.xxl};
  font-weight: 630;
  color: ${theme.colors.primary};
  letter-spacing: 2%;
  text-align: right;
  line-height: 1.32;
`;

export const CategoriesSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const CategoryButton = styled.button`
  padding: 12px 16px;
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  color: ${theme.colors.secondary};
  background-color: transparent;
  border: 1px solid rgba(6, 10, 38, 0.06);
  border-radius: ${theme.borderRadius.round};
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CategoryButtonActive = styled(CategoryButton)`
  background-color: ${theme.colors.secondary};
  color: white;
  border: none;
  
  &:hover {
    background-color: ${theme.colors.secondary};
    opacity: 0.9;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  width: 308px;
  height: 308px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  font-family: 'MiSans VF', sans-serif;
  font-size: ${theme.fontSizes.xl};
  font-weight: 450;
  color: white;
  line-height: 1.32;
`;

export const CardSubtitle = styled.p`
  font-family: 'MiSans VF', sans-serif;
  font-size: ${theme.fontSizes.sm};
  font-weight: 450;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.32;
`;

export const GenerateButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  font-family: 'MiSans VF', sans-serif;
  font-size: ${theme.fontSizes.sm};
  font-weight: 520;
  padding: 10px 81px;
  border-radius: ${theme.borderRadius.medium};
  align-self: flex-start;
  margin-top: 20px;
  line-height: 1.7;
`; 