'use client';

import React from 'react';
import {
  ContentContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CounterSection,
  CounterLabel,
  CounterValue,
  CategoriesSection,
  CategoryButton,
  CategoryButtonActive,
  CardsContainer,
  Card,
  CardImage,
  CardOverlay,
  CardTitle,
  CardSubtitle,
  GenerateButton
} from './styles';

const HomeContent = () => {
  return (
    <ContentContainer>
      <HeroSection>
        <div>
          <HeroTitle>免费商用不侵权，AI作图超省心</HeroTitle>
          <HeroSubtitle>海量图片免费下载，AI智能生成助力高效创作</HeroSubtitle>
        </div>
        <CounterSection>
          <CounterLabel>素材总量</CounterLabel>
          <CounterValue>23.34.786</CounterValue>
        </CounterSection>
      </HeroSection>

      <CategoriesSection>
        <CategoryButtonActive>灵感趋势</CategoryButtonActive>
        <CategoryButton>AI精选</CategoryButton>
        <CategoryButton>海报设计</CategoryButton>
        <CategoryButton>照片</CategoryButton>
        <CategoryButton>插画</CategoryButton>
        <CategoryButton>写实人像</CategoryButton>
        <CategoryButton>电商设计</CategoryButton>
        <CategoryButton>3d艺术</CategoryButton>
        <CategoryButton>logo设计</CategoryButton>
      </CategoriesSection>

      <CardsContainer>
        <Card>
          <CardImage style={{ backgroundColor: '#060A26' }} />
          <CardOverlay>
            <CardTitle>AI作图</CardTitle>
            <CardSubtitle>轻松实现创意图片</CardSubtitle>
          </CardOverlay>
        </Card>
        <Card>
          <CardImage style={{ backgroundColor: '#0B4430' }} />
        </Card>
        <Card>
          <CardImage style={{ backgroundColor: '#8B6F4E' }} />
        </Card>
        <Card>
          <CardImage style={{ backgroundColor: '#444F7A' }} />
        </Card>
      </CardsContainer>

      <GenerateButton>立即生成</GenerateButton>
    </ContentContainer>
  );
};

export default HomeContent; 