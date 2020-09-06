package codingtest.samsung;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main_치킨배달 {

    private static int[][] dist;
    private static int answer;

    static class Dot {
        int x;
        int y;

        public Dot(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    static class Dist {
        int h;
        int c;
        int dist;

        public Dist(int h, int c, int dist) {
            this.h = h;
            this.c = c;
            this.dist = dist;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[][] map = new int[N][N];
        ArrayList<Dot> houses = new ArrayList<>();
        ArrayList<Dot> chicken = new ArrayList<>();

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
                if (map[i][j] == 1) {
                    houses.add(new Dot(i, j));
                } else if (map[i][j] == 2) {
                    chicken.add(new Dot(i, j));
                }
            }
        }

        dist = new int[houses.size()][chicken.size()];
        ArrayList<Dist> arr = new ArrayList<>();
        // 집 기준으로 치킨집거리
        // 조합 순열로 했다간 시간 터질거같음
        int index = 0;
        for (Dot house: houses) {
            for (int i = 0; i < chicken.size(); i++) {
                dist[index][i] = Math.abs(house.x - chicken.get(i).x) + Math.abs(house.y - chicken.get(i).y);
//                arr.add(new Dist(index, i, dist[index][i]));
            }
            index++;
        }

        answer = Integer.MAX_VALUE;
        int[] comb = new int[M];
        combination(comb, 0, chicken.size(), M, 0);

        System.out.println(answer);
    }

    static void combination(int[] arr, int index, int n, int r, int target){
        if(r==0) {
            int minDist = 0;
            for (int i = 0; i < dist.length; i++) {
                int temp = Integer.MAX_VALUE;
                for (int j = 0; j < arr.length; j++) {
                    temp = dist[i][arr[j]] < temp ? dist[i][arr[j]] : temp;
                }
                minDist += temp;
            }

            answer = minDist < answer ? minDist : answer;

        } else if(target == n) return;
        else {
            arr[index] = target;
            combination(arr, index + 1, n, r-1, target + 1);
            combination(arr, index, n, r, target+1);
        }
    }
}
