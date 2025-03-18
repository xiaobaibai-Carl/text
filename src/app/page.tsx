'use client';

import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HomeContent from '@/components/HomeContent';
import { GlobalStyles } from '@/styles/globalStyles';

export default function Home() {
  return (
    <main>
      <GlobalStyles />
      <Header />
      <div style={{ padding: '0 40px', maxWidth: '1280px', margin: '0 auto' }}>
        <Navigation />
        <HomeContent />
      </div>
    </main>
  );
}
