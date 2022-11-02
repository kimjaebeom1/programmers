function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let arr5 = [];
  // 1. 저 4가지 조합의 총 배열을 어케 만들지 (중요!)
  // 1-1) 1자리는 그냥 그 배열
  // 1-2) 2자리는? for문한번
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] != arr[j]) arr1.push(arr[i] + arr[j]);
    }
  }

  // 1-3. 3중 for문?
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] != arr[j] && arr[j] != arr[k])
          arr2.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  // 1-4. 4중 for문?
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        for (let l = 0; l < arr.length; l++) {
          if (arr[i] != arr[j] && arr[j] != arr[k] && arr[k] != arr[l])
            arr3.push(arr[i] + arr[j] + arr[k] + arr[l]);
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        for (let l = 0; l < arr.length; l++) {
          for (let m = 0; m < arr.length; m++) {
            if (
              arr[i] != arr[j] &&
              arr[j] != arr[k] &&
              arr[k] != arr[l] &&
              arr[l] != arr[m]
            )
              arr4.push(arr[i] + arr[j] + arr[k] + arr[l] + arr[m]);
          }
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        for (let l = 0; l < arr.length; l++) {
          for (let m = 0; m < arr.length; m++) {
            for (let n = 0; n < arr.length; n++) {
              if (
                arr[i] != arr[j] &&
                arr[j] != arr[k] &&
                arr[k] != arr[l] &&
                arr[l] != arr[m] &&
                arr[m] != arr[n]
              )
                arr5.push(arr[i] + arr[j] + arr[k] + arr[l] + arr[m] + arr[n]);
            }
          }
        }
      }
    }
  }

  let arr6 = arr.concat(arr1, arr2, arr3, arr4, arr5);

  let answer = babbling.filter((el) => arr6.includes(el)).length;
  return answer;
}
