import { WorshipService } from '@/types/worship';

export const worshipData: WorshipService = {
  title: '추석 가정예배',
  contents: [
    {
      id: 'worship',
      type: 'SONG',
      navTitle: '찬송',
      title: '찬송가 412장',
      youtubeEmbed:
        'https://www.youtube.com/embed/XCBuqVxNwJE?si=8IVELrZVxjUOJ1K7',
      lyrics: [
        '1. 내 영혼의 그윽히 깊은데서 맑은 가락이 올려나네',
        '하늘 곡조가 언제나 플러나와 내 영혼을 고이싸네',
        '평화 평화로다 하늘위에서 내려오네',
        '그 사랑의 물결이 영원토록 내 영혼을 덮으소서',
        '',
        '2. 내 맘속에 솟아난 이 평화는 깊이 묻히인 보배로다',
        '나의 보화를 캐내어 가져갈자 그 아무도 없으리라',
        '평화 평화로다 하늘위에서 내려오네',
        '그 사랑의 물결이 영원토록 내 영혼을 덮으소서',
        '',
        '3. 내 영혼에 평화가 넘쳐남은 주의 큰복을 받음이라',
        '내가 주야로 주님과 함께있어 내 영혼이 편히쉬네',
        '평화 평화로다 하늘위에서 내려오네',
        '그 사랑의 물결이 영원토록 내 영혼을 덮으소서',
        '',
        '4. 이 땅위의 험한길 가는 동안 참된 평화가 어디있나',
        '우리 모두 다 예수를 찬구삼아 참 평화를 누리겠네',
        '평화 평화로다 하늘위에서 내려오네',
        '그 사랑의 물결이 영원토록 내 영혼을 덮으소서',
      ],
    },
    {
      id: 'Prayer',
      type: 'TEXT',
      navTitle: '기도',
      title: '대표기도',
      content: `기도: 주윤아`,
    },
    {
      id: 'reading',
      type: 'TEXT',
      navTitle: '말씀',
      title: '요 14장 27절',
      content: `평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 
      
      내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 

      너희는 마음에 근심하지도 말고 두려워하지도 말라
      `,
    },
    {
      id: 'sermon',
      type: 'TEXT',
      navTitle: '말씀',
      title: '세상이 줄 수 없는 평안',
      content: `말씀: 이민혁 목사`,
    },
  ],
};
