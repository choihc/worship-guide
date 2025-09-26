import { WorshipLayout } from '@/components/layout/WorshipLayout';
import { worshipData } from '@/data/worship-data';

export default function Home() {
  return <WorshipLayout worshipService={worshipData} />;
}
