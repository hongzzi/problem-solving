// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let answer = 0;
  let preStatus = 0; // -1 down, 1 up, 0 both
  let height = A[0];

  A.forEach((element, idx) => {
    if( height != element ) {
        let nextStatus = element - height > 0 ? 1 : -1;
        if (nextStatus != preStatus) {
          answer += 1;
        }
        height = element;
        preStatus = nextStatus;
    }
  });

  answer = answer + 1; 
  return answer;
}

console.log(solution([1,2,3,4,5,6,7]));
