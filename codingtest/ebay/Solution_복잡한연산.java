package codingtest.ebay;

import java.util.ArrayList;
import java.util.Arrays;

public class Solution_복잡한연산 {

    public static void main(String[] args) {
        int result = solution(new int[] { 5, 8, 3, 7, 10, 5, 4 },
                new int[][] { { 1, 2 }, { 2, 4 }, { 1, 4 }, { 6, 5 }, { 3, 5 }, { 4, 6 } }, 5);
        System.out.println(result);
    }

    static ArrayList<Integer>[] graph;
    static boolean[] visited;
    static int[] memoization;

    public static int solution(int[] T, int[][] R, int k) {
        int answer = 0;
        graph = new ArrayList[T.length];
        visited = new boolean[T.length];
        memoization = new int[T.length];

        for (int i = 0; i < graph.length; i++) {
            ArrayList<Integer> list = new ArrayList<>();
            graph[i] = list;
        }
        for (int i = 0; i < R.length; i++) {
            graph[R[i][1] - 1].add(R[i][0] - 1);
        }

        System.out.println(Arrays.toString(graph));

        answer = dfs(T, k - 1);

        return answer;
    }

    public static int dfs(int[] T, int index) {
        if (graph[index].size() == 0) {
            visited[index] = true;
            memoization[index] = T[index];
            return T[index];
        }

        int time = 0;
        for (int vertex : graph[index]) {
            int result = !visited[vertex] ? dfs(T, vertex) : memoization[vertex];
            time = result > time ? result : time;
        }
        visited[index] = true;
        memoization[index] = T[index] + time;

        return T[index] + time;
    }
}
