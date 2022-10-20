// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
    let arr =[]
    let newArr = []
    for(let i = 0 ; i<nums.length ; i++){
     for(let j = i+1 ; j<nums.length ; j++){
         for(let k = j+1 ; k<nums.length ; k++){
         arr.push(nums[i]+nums[j]+nums[k])
             }
         }
     }
     newArr = arr
     let answer = []
     
     newArr.map((el)=>{
         if(!el || el === 1) return false;
         for (let i = 2; i <= Math.sqrt(el) ; i++) {
         if (el % i === 0) return false;
         }
         answer.push(1)        
     })    
     return answer.length
 }