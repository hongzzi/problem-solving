function solution(n) {
    let answer = 0;
    // 체스판 생성
    const chessMap = Array.from(Array(n), () => Array(n).fill(true));
    // 재귀로 체스판 확인 백트래킹할것
    const backtracking = (chess, row, queen) => {
        if (queen === 0) {
            answer++;
            return;
        }
        for (let i = 0; i < chess.length; i++) {
            if (chess[row][i]) {
                // 퀸 놓을 수 있는 자리 !
                chess[row][i] = false;
                const newChessMap = isQueenAtack(chess, row, i);
                backtracking(newChessMap, row + 1, queen - 1);
                chess[row][i] = true;
            }
        }
    };
    const isQueenAtack = (chess, row, col) => {
        const newMap = chess.map((array) => [...array]);
        for (let i = 0; i < chess.length; i++) {
            newMap[row][i] = false;
            newMap[i][col] = false;
            if (row - i >= 0) {
                if(col - i >= 0) newMap[row - i][col - i] = false;
                if(col + i < newMap.length) newMap[row - i][col + i] = false;
            }
            if (row + i < newMap.length) {
                if(col - i >= 0) newMap[row + i][col - i] = false;
                if(col + i < newMap.length) newMap[row + i][col + i] = false;
            }
        }
        // 대각선 공격처리
        return newMap;
    };

    backtracking(chessMap, 0, n);
    console.log(answer);
}

solution(4);
