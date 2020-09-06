function solution(begin, target, words) {
    let answer = Number.MAX_VALUE;
    const boolMap = Array(words.length).fill(true);

    const dfs = (prev, target, words, bool, count) => {
        // target 됐을 때
        if (prev === target) {
            answer = count <= answer ? count : answer;
            return;
        }
        // 단어 목록 돌기
        for (let idx = 0; idx < bool.length; idx++) {
            if (bool[idx]) {
                let diff = 0;
                for (let i in prev) {
                    if (prev.charAt(i) !== words[idx].charAt(i)) {
                        diff++;
                    }
                }
                if (diff === 1) {
                    bool[idx] = false;
                    dfs(words[idx], target, words, bool, count + 1);
                    bool[idx] = true;
                }
            }
        }
    };

    dfs(begin, target, words, boolMap, 0);

    return answer === Number.MAX_VALUE ? 0 : answer;
}
