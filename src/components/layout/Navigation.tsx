import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { WorshipContent } from '@/types/worship';

interface NavigationProps {
  contents: WorshipContent[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Navigation({
  contents,
  currentIndex,
  onNavigate,
}: NavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeButtonRef.current && scrollContainerRef.current) {
      const activeButton = activeButtonRef.current;
      const scrollContainer = scrollContainerRef.current;

      // active 버튼이 컨테이너의 중앙에 오도록 스크롤
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();

      const buttonCenter = buttonRect.left + buttonRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const scrollOffset = buttonCenter - containerCenter;

      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={scrollContainerRef} className="overflow-x-auto">
          <div className="flex gap-2 justify-center min-w-max px-4">
            {contents.map((content, index) => (
              <Button
                key={content.id}
                ref={index === currentIndex ? activeButtonRef : null}
                variant={index === currentIndex ? 'default' : 'outline'}
                size="sm"
                onClick={() => onNavigate(index)}
                className="text-xs whitespace-nowrap flex-shrink-0"
              >
                {index + 1}. {content.title.split('/')[0].trim()}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
