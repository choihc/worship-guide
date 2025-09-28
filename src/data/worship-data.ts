import { WorshipService } from '@/types/worship';

export const worshipData: WorshipService = {
  title: '중등부 교사 워크샵',
  contents: [
    {
      id: 'opening',
      type: 'TEXT',
      navTitle: '소그룹 시작',
      title: '워크샵 소그룹',
      content: '다음 나눔질문을 참고하여 소그룹을 진행하여 주세요.',
    },
    {
      id: 'question1',
      type: 'TEXT',
      navTitle: '나눔질문 1',
      title: '첫번째 나눔질문',
      content: `하나님이 오늘 이 자리에 오셔서 교사인 나를 칭찬하신다면, 위에서 언급된 7가지의 칭찬 중 어떤 내용을 가지고 칭찬하셨을까요? 두 가지 칭찬 내용을 선택하여 관련된 구체적인 경험이나 에피소드를 짧게 나눠봅시다.
      
      1) 행위–구체적인 사역
2) 수고–피로를 동반한 헌신
3) 인내–끝까지 기다림
4) 악한 자들을 용납하지 않음
5) 거짓된 것을 드러냄 
6) 참고, 견디고, 게으르지 아니함
7) 니골라 당의 행위를 미워함(세상의 가치나 유혹에 물들지 않도록 지켜줌)`,
    },
    {
      id: 'question2',
      type: 'TEXT',
      navTitle: '나눔질문 2',
      title: '두번째 나눔질문',
      content: `나의 처음 사랑이 식어버린 특별한 계기나 사건이 있나요? 그 지점은 언제인가요?
      
(처음과 달라진 모습, 마음 등 나의 신앙생활 기간 전체 속에서 나눠도 무관합니다.)
      `,
    },
    {
      id: 'question3',
      type: 'TEXT',
      navTitle: '나눔질문 3',
      title: '세번째 나눔질문',
      content: `내가 회복하고 싶은(더 성장하고 싶은) 처음 행위는 무엇일까요?

(아이들과의 교제, 예배를 기도로 준비함, 아이들을 향한 기도)`,
    },
  ],
};
