import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WorshipContent } from '@/types/worship';

interface TextContentProps {
  content: WorshipContent;
}

export function TextContent({ content }: TextContentProps) {
  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {content.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-w-none">
          <p className="whitespace-pre-line text-lg leading-relaxed text-gray-800">
            {content.content}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
