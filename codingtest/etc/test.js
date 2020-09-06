function solution(name_list) {
    var answer = true;

    name_list.sort();
    for (let index = 0; index < name_list.length-1; index++) {
        for (let idx = index+1; idx < name_list.length; idx++) {
            if(name_list[idx].indexOf(name_list[index]) > -1){
                return true;
            };
        }
    }

    return false;
}

console.log(solution(["너굴", "너울", "여울", "서울"]));


