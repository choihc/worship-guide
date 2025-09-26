import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function Pagination({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
}: PaginationProps) {
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < totalItems - 1;

  return (
    <div className="bg-white border-t border-gray-200 py-4 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          이전
        </Button>

        <div className="text-sm text-gray-600">
          {currentIndex + 1} / {totalItems}
        </div>

        <Button
          variant="outline"
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2"
        >
          다음
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
