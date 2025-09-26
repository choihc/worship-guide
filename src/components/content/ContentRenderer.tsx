import { WorshipContent } from '@/types/worship';
import { TextContent } from './TextContent';
import { SongContent } from './SongContent';

interface ContentRendererProps {
  content: WorshipContent;
}

export function ContentRenderer({ content }: ContentRendererProps) {
  switch (content.type) {
    case 'TEXT':
      return <TextContent content={content} />;
    case 'SONG':
      return <SongContent content={content} />;
    default:
      return null;
  }
}
