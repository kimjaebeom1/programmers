// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요

// function solution(X, Y) {
//   let arr = [];
//   //     1. 배열로 (splice 함수 쓸라고)
//   let x = X.split("");
//   let y = Y.split("");
//   let result = 0;
//   //     2. x의 길이가 더 길면 이중 for문 x배열 -> y배열
//   //     2-1. 비교해서 같은 값이 있으면 그 값을 새 배열에 push, y배열에서 그 값은 제거
//   if (x.length >= y.length) {
//     for (let i = 0; i < x.length; i++) {
//       for (let j = 0; j < y.length; j++) {
//         if (x[i] === y[j]) {
//           arr.push(y[j]);
//           y.splice(j, 1);
//           break;
//         }
//       }
//     }
//   }
//   //     3. y의 길이가 더 길면 이중 for문 y배열 -> x배열
//   //     3-1. 비교해서 같은 값이 있으면 그 값을 새 배열에 push, x배열에서 그 값은 제거
//   else {
//     for (let i = 0; i < y.length; i++) {
//       for (let j = 0; j < x.length; j++) {
//         if (y[i] === x[j]) {
//           arr.push(x[j]);
//           x.splice(j, 1);
//           break;
//         }
//       }
//     }
//   }
//   //     4. 배열이 0만 있으면 0
//   if (parseInt(arr) === 0) result = "0";
//   //     5. 겹치는 값이 없으면 -1
//   else if (arr.length === 0) {
//     result = "-1";
//   }
//   //     6. 전부 아니면 정렬해서 문자열로
//   else result = arr.sort((a, b) => b - a).join("");
//   return result;
// }

function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  // 해당 숫자가 얼마나 있는지 확인해서 더 낮은만큼 정답 문자열에 더함
  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => Number(a) === i).length;
    const curY = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  // 내림차순으로 정렬해 반환하면 최댓값
  return answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
