import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { WorshipContent } from '@/types/worship';

interface SongContentProps {
  content: WorshipContent;
}

export function SongContent({ content }: SongContentProps) {
  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {content.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {content.youtubeEmbed && (
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={content.youtubeEmbed}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        )}

        {content.lyrics && (
          <>
            <Separator />
            <div className="max-w-none">
              <div className="text-center space-y-2">
                {content.lyrics.map((line, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-gray-800"
                  >
                    {line || <br />}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
