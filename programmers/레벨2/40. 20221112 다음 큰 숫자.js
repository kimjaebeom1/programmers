// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.

function solution(n) {
  //     1. 이진법 변환
  binary = n.toString(2);
  //     2. 이진법 변환한 n의 1의 개수 구하기
  oneLength = binary.match(/1/g).length;
  let arr = [];
  //     3. n보다 크고 2의 n+1의 길이값의 거듭제곱보다 작은값들을 2진법으로 배열에 넣기
  for (let i = n + 1; i < 2 ** (n + 1).toString(2).length; i++) {
    arr.push(i.toString(2));
  }
  //     4. 1의 개수가 같은 값만 새로운 배열로 구하기, 그중 맨처음값이 가장 작은값
  newArr = arr.filter((el) => el.match(/1/g).length === oneLength);
  return parseInt(newArr[0], 2);
}
// 테스트케이스는 모두 통과하지만, 효율성을 하나도 못통과함 ㅠ
