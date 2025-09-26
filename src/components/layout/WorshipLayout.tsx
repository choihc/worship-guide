'use client';

import { useState } from 'react';
import { WorshipService } from '@/types/worship';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Pagination } from './Pagination';
import { ContentRenderer } from '../content/ContentRenderer';

interface WorshipLayoutProps {
  worshipService: WorshipService;
}

export function WorshipLayout({ worshipService }: WorshipLayoutProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = worshipService.contents[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < worshipService.contents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleNavigate = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      <Header title={worshipService.title} />

      <Navigation
        contents={worshipService.contents}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 overflow-y-auto py-8 px-4 custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          <ContentRenderer content={currentContent} />
        </div>
      </main>

      <Pagination
        currentIndex={currentIndex}
        totalItems={worshipService.contents.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}
