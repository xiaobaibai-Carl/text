import styled from 'styled-components';
import { theme } from './theme';

// 卡片容器
export const Card = styled.div`
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadow.light};
  
  &:hover {
    box-shadow: ${theme.shadow.medium};
    transition: box-shadow 0.3s ease;
  }
`;

// 标题文本
export const Title = styled.h2`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing.md};
  font-weight: 600;
`;

// 副标题文本
export const Subtitle = styled.h3`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.md};
  margin-bottom: ${theme.spacing.lg};
  font-weight: 500;
`;

// 段落文本
export const Text = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.sm};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

// 主要按钮
export const PrimaryButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.round};
  cursor: pointer;
  border: none;
  
  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s ease;
  }
`;

// 次要按钮
export const SecondaryButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.round};
  cursor: pointer;
  border: 1px solid ${theme.colors.secondary};
  
  &:hover {
    background-color: rgba(6, 10, 38, 0.05);
    transition: background-color 0.2s ease;
  }
`;

// 灵活布局容器
export const Flex = styled.div<{ direction?: 'row' | 'column', gap?: string, align?: string, justify?: string }>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || theme.spacing.md};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
`;

// 响应式网格布局
export const Grid = styled.div<{ columns?: number, gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// 图片容器
export const ImageContainer = styled.div`
  width: 100%;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// 徽章/标签
export const Badge = styled.span`
  background-color: ${theme.colors.accent};
  color: white;
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  display: inline-block;
`;

// 输入框
export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  font-size: ${theme.fontSizes.sm};
  border: 1px solid rgba(6, 10, 38, 0.1);
  border-radius: ${theme.borderRadius.small};
  outline: none;
  
  &:focus {
    border-color: ${theme.colors.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

// 分割线
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(6, 10, 38, 0.1);
  margin: ${theme.spacing.xl} 0;
`;

// 容器
export const Container = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

// 警告提示
export const Alert = styled.div<{ variant?: 'info' | 'success' | 'warning' | 'error' }>`
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing.lg};
  background-color: ${props => {
    switch (props.variant) {
      case 'success':
        return 'rgba(87, 220, 173, 0.1)';
      case 'warning':
        return 'rgba(255, 177, 66, 0.1)';
      case 'error':
        return 'rgba(255, 136, 123, 0.1)';
      default:
        return 'rgba(66, 153, 225, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case 'success':
        return theme.colors.primary;
      case 'warning':
        return '#FFB142';
      case 'error':
        return theme.colors.accent;
      default:
        return '#4299E1';
    }
  }};
  border-left: 4px solid ${props => {
    switch (props.variant) {
      case 'success':
        return theme.colors.primary;
      case 'warning':
        return '#FFB142';
      case 'error':
        return theme.colors.accent;
      default:
        return '#4299E1';
    }
  }};
`; 