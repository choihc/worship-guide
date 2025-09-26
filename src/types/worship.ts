export type ContentType = 'TEXT' | 'SONG';

export interface WorshipContent {
  id: string;
  type: ContentType;
  title: string;
  content?: string;
  youtubeEmbed?: string;
  lyrics?: string[];
}

export interface WorshipService {
  title: string;
  contents: WorshipContent[];
}
