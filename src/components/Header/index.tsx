'use client';

import React from 'react';
import { HeaderContainer, Logo, SearchBar, SearchIcon, SearchInput, ActionContainer, ActionButton, ActionButtonPrimary } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <div className="logoIcon">□</div>
        <span>图星人</span>
        <div className="logoStar">★</div>
      </Logo>
      
      <SearchBar>
        <SearchIcon>◯</SearchIcon>
        <SearchInput placeholder="搜索高质量设计模板素材" />
      </SearchBar>
      
      <ActionContainer>
        <ActionButton>版本更新</ActionButton>
        <ActionButton>会员</ActionButton>
        <ActionButton>登录</ActionButton>
        <ActionButtonPrimary>免费试用</ActionButtonPrimary>
      </ActionContainer>
    </HeaderContainer>
  );
};

export default Header; 