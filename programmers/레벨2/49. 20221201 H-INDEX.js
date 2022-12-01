// H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

// 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
// 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

function solution(citations) {
  //     1. 내림차순으로 정렬한다.

  //     2. 배열의 길이만큼 반복문을 돌면서 피인용수(citations[i])가 논문수(i)와 같거나 작을때의 i를 리턴한다.

  //    https://www.ibric.org/myboard/read.php?Board=news&id=270333 참조
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) return i;
  }
  return citations.length;
}
