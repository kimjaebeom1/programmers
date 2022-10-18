// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    // 1. 이중 For문으로 배열의 index 값 다 더하기
        let arr = []
        let answer = 0
        for(let i = 0 ; i<numbers.length ; i++){
        for(let j = i+1 ; j<numbers.length ; j++){
        arr.push(numbers[i]+numbers[j])
      }
    }
    // 2. 중복값제거
        let uniqueArr = [...new Set(arr)]
        
    // 3. 오름차순
        
        return uniqueArr.sort((a,b)=>a-b)
    }