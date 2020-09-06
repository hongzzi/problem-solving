const solution = (participant, completion) => {
    const playerMap = new Map();
    completion.map((player) => {
        if (playerMap.has(player)) {
            let value = playerMap.get(player);
            playerMap.set(player, ++value);
        } else playerMap.set(player, 1);
    });
    const answer = participant.filter((player) => {
        if (playerMap.has(player)) {
            if (playerMap.get(player) === 0) return true;
            else {
                let value = playerMap.get(player);
                playerMap.set(player, --value);
            }
            console.log(playerMap);
        } else return true;
    });
    return answer[0];
};

console.log(
    solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
