function solution(lottos, win_nums) {
    
    const correct = lottos.filter((lotto)=> win_nums.includes(lotto)).length;
    
    const zeros = lottos.filter((lotto) => lotto === 0 ).length;
    
    const min = 7 - correct > 6 ?  6 : 7 - correct;
    
    const max = min - zeros < 1 ?  1 : min - zeros;
    
    const answer = [max, min];
    
    return answer;
}