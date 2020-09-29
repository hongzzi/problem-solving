function solution(cards) {
    let money = 0;

    let gameCondition = true;
    let player = [];
    let dealer = [];
    const mappedCards = cards.map(num => num>10 ? 10 : num);

    function sum (arr) {
        let oneCount = arr.filter(el => el === 1).length;
        let val =  arr.reduce((acc, cur) => acc+cur, 0) + 10 * oneCount;

        while (val > 21 && oneCount > 0) {
            val -= 10;
            oneCount--;
        }

        return val;
    }

    function getBalckJack(arr) {
        return sum(arr) === 21;
    }

    function endGame () {
        if(mappedCards.length <= 0) {
            gameCondition = false;
            return true;
        }
    }

    while(gameCondition) {
        player = [];
        dealer = [];
        if(endGame()) {
            break;
        }

        // 한장씩 받음
        player.push(mappedCards.shift());
        dealer.push(mappedCards.shift());
        player.push(mappedCards.shift());
        dealer.push(mappedCards.shift());

        let isBlackJack = getBalckJack(player);

        // 딜러카드보고 플레이어카드뽑기
        if(dealer[1] === 1 || dealer[1] >= 7) {
            while(sum(player) < 17) {
                if(endGame()){
                    break;
                }
                player.push(mappedCards.shift());
            }
        }
        if(dealer[1] >= 4 && dealer[1] <= 6) {
            // 안받음
        }
        if(dealer[1] === 2 || dealer[1] === 3) {
            while(sum(player) < 12) {
                if(endGame()){
                    break;
                }
                player.push(mappedCards.shift());
            }
        }
        if(!gameCondition){
            break;
        }

        // 플레이어 블랙잭이면 이긴다
        isBlackJack = getBalckJack(player);
        if(isBlackJack) {
            money += 3;
            continue;
        }

        // 플레이어 21넘으면 진다
        if(sum(player) > 21) {
            money -= 2;
            continue;
        }

        // 딜러카드뽑기
        while(sum(dealer) < 17) {
            if(endGame()){
                break;
            }
            dealer.push(mappedCards.shift());
        }
        if(!gameCondition){
            break;
        }

        // 딜러가 21넘으면 진다.
        if(sum(dealer) > 21) {
            money += 2;
            continue;
        }

        // 비교

        const playerSum = sum(player);
        const dealerSum = sum(dealer);
        if(playerSum > dealerSum) {
            money += 2;
        } else if(playerSum < dealerSum){
            money -= 2;
        }

        if(mappedCards.length <= 0) {
            break;
        }
    }

    return money;
}