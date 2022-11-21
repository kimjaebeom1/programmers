// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

function solution(arr) {
  let answer = 0;

  // 한 숫자를 계속 곱해주고, 나눈 나머지의 값이 모두 0으로 떨어지면
  // 모든 값의 최소공배수가 구해진다.
  let n = 1,
    flag = false;
  while (!flag) {
    n++;
    for (let i = 1; i < arr.length; ++i) {
      if ((arr[0] * n) % arr[i] === 0) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
  }

  answer = arr[0] * n;
  return answer;
}
