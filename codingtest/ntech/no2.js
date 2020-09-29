function solution(N) {
    const dp = Array(N+1).fill(0);
    for (let i = 0; i < dp.length; i++) {
        if (i === 0 || i === 1) dp[i] = 1;
        else dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[N];
}

console.log(solution(2));
console.log(solution(3));