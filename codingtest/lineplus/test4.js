function solution(maze) {
    let answer = 0;
    answer = dfs(maze, 0, 0, 3, 0);
    return answer;
}

function dfs(maze, x, y, direction, count) {
    if(x === maze.length-1 && y === maze.length-1) return count;
    const dirx = [0, -1, 0, 1];
    const diry = [-1, 0, 1, 0];
    for(let i = 0; i < 4; i++) {
        let face = (direction + 3 + i) % 4;
        let [newX, newY] = [x+dirx[face], y+diry[face]];
        if(isIn(newX, newY, maze.length) && maze[newX][newY] == 0) {
            return dfs(maze, newX, newY, face, count + 1);
        }
    }
}

function isIn(x, y, length) {
    return x >= 0 && y >= 0 && x < length && y < length;
}

console.log(solution([[0, 1, 0, 1], [0, 1, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0]]));
console.log(solution([[0, 1, 0, 0, 0, 0], [0, 1, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0]]));
console.log(solution([[0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0]]));
console.log(solution([[0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0]]));