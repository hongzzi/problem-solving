function solution(key, lock) {
    const newLock = makeLock(key, lock);
    for(let i = 0; i < 4; i++) {
        if(unlock(key, newLock)) return true;
        key = keyRotation(key);
    }
    return false;
}

const makeLock = (key, lock) => {
    const extra = key.length - 1;
    const newSize = lock.length + (extra * 2);
    const newLock = Array.from(Array(newSize), () => Array(newSize).fill(0));
    for(let x = 0; x < lock.length; x++) {
        for (let y = 0; y < lock.length; y++) {
            newLock[x+extra][y+extra] = lock[x][y];
        }
    }
    return newLock;
}

const unlock = (key, lock) => {
    const range = lock.length - key.length + 1;
    for(let x = 0; x < range; x++) {
        for(let y = 0; y < range; y++) {
            // 키 꽂기
            for (let i = 0; i < key.length; i++) {
                for (let j = 0; j < key.length; j++) {
                    lock[x+i][y+j] += key[i][j];
                }
            }
            // 확인
            let flag = true;
            for (let i = key.length - 1; i < range; i++) {
                for (let j = key.length - 1; j < range; j++) {
                    if(lock[i][j] !== 1) {
                        flag = false;
                        break;
                    }
                }
            }
            if(flag) {
                return true;
            }
            // 키 뺴기
            for (let i = 0; i < key.length; i++) {
                for (let j = 0; j < key.length; j++) {
                    lock[x+i][y+j] -= key[i][j];
                }
            }
        }
    }
}

const keyRotation = (key) => {
    const newKey = [];
    for(let x = 0; x < key.length; x++) {
        const newRow = [];
        for(let y = key.length-1; y >= 0; y--) {
            newRow.push(key[y][x]);
        }
        newKey.push(newRow);
    }
    return newKey;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));