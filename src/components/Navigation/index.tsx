'use client';

import React from 'react';
import { NavContainer, NavGroup, NavItem, NavItemActive, AiButton } from './styles';

const Navigation = () => {
  return (
    <NavContainer>
      <NavGroup>
        <NavItemActive>灵感探索</NavItemActive>
        <NavItem>AI创意</NavItem>
        <NavItem>模板</NavItem>
        <NavItem>图片</NavItem>
        <NavItem>我的素材</NavItem>
      </NavGroup>
      
      <NavGroup>
        <NavItemActive>AI工具箱</NavItemActive>
        <NavItem>AI作图</NavItem>
        <NavItem>AI抠图</NavItem>
        <NavItem>AI消除</NavItem>
        <NavItem>AI扩图</NavItem>
        <AiButton>
          <span className="icon">★</span>
          <span className="text">AI</span>
        </AiButton>
      </NavGroup>
    </NavContainer>
  );
};

export default Navigation; 