function solution(s) {
  let answer = [0, 0];
  // 1. S가 1일때까지 반복
  while (s !== "1") {
    // 2. 배열 변환
    s = s.split("");
    // 3. 0빼고 1의 길이만 담는 값의 길이 구하기
    let temp = s.filter((el) => el === "1").length;
    // 4. 1이 아니니까 answer 0번째 값에는 1추가, 1번째 값에는 0의 개수값 추가
    answer[0] += 1;
    answer[1] += s.length - temp;
    // 5. s는 다시 1의 길이 값의 이진법
    s = temp.toString(2);
  }
  return answer;
}
