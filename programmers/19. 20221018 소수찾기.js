// // 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)



function solution(n) {
    let answer = [];
    
    function isPrime (n) {
      for(let x of answer) {
        if(x>Math.sqrt(n))return true
        if(Number.isInteger(n/x)) return false
      }
      return true
    }
    
    for(let i=2; i<=n; i++) {
          if(!i%2) continue
      if(isPrime(i)) answer.push(i)
    }
    
    return answer.length;
  }