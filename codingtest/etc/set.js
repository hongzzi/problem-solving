function solution(arrayA, arrayB) {
  var answer = [];

  let baseSet = set(arrayA);
  let otherSet = set(arrayB);

  let sumSet = sum(baseSet, otherSet);
  let comSet = complement(baseSet, otherSet);
  let intSet = intersect(baseSet, otherSet);

  return answer;
}

function set(array) {
  let result = [];

  array.forEach((element) => {
    if (!result.includes(element)) {
        result.push(element);
    }
  });

  return result;
}

function sum(base, other) {
  let array = [];

  array = array.concat(base);
  other.forEach((element) => {
    if (!array.includes(element)) {
      array.push(element);
    }
  });

  return array;
}

function complement(base, other) {
  let array = [];

  array = array.concat(
    base.filter((element) => {
      return !other.includes(element);
    })
  );
  return array;
}

function intersect(base, other) {
  let array = [];

  array = array.concat(
    base.filter((element) => {
      return other.includes(element);
    })
  );

  return array;
}

solution([2,3,4,3,5], [1,6,7]);
