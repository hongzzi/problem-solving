package codingtest.samsung;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main_원판돌리기 {
    private static int[][] map;
    private static boolean[][] bmap;
    private static int[] dirx = {-1, 0, 1, 0};
    private static int[] diry = {0, 1, 0, -1};
    private static int N, M;
    private static boolean flag;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        int T = Integer.parseInt(st.nextToken());
        List<Integer> list = new ArrayList<>();
        map = new int[N][M];

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for (int i = 0; i < T; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int d = Integer.parseInt(st.nextToken());
            int k = Integer.parseInt(st.nextToken());

            flag = false;

            int a = N / x;
            int nx = 0;
            for (int o = 1; o <= a; o++) {
                nx = x * o;
                list.clear();
                // 방향 돌려주
                k = k % M;
                if (d == 0) {
                    for (int j = 0; j < M; j++) {
                        list.add(map[nx - 1][(j - k + M) % M]);
                    }
                } else if (d == 1) {
                    for (int j = 0; j < M; j++) {
                        list.add(map[nx - 1][(j + k) % M]);
                    }
                }

                for (int j = 0; j < M; j++) {
                    map[nx - 1][j] = list.get(j);
                }
            }

            bmap = new boolean[N][M];

            for (int j = 0; j < N; j++) {
                for (int l = 0; l < M; l++) {
                    if (!bmap[j][l] && map[j][l] != 0) {
                        check(j, l, map[j][l]);
                    }
                }
            }

            if (!flag) {
                int sum = 0;
                int count = 0;
                for (int j = 0; j < N; j++) {
                    for (int l = 0; l < M; l++) {
                        if (map[j][l] != 0) {
                            sum += map[j][l];
                            count++;
                        }
                    }
                }

                float avr = 0;
                if (count != 0 || sum != 0) {
                    avr = (float) sum / (float) count;
                }

                for (int j = 0; j < N; j++) {
                    for (int l = 0; l < M; l++) {
                        if (map[j][l] != 0) {
                            if (map[j][l] < avr)
                                map[j][l]++;
                            else if (map[j][l] > avr)
                                map[j][l]--;
                        }
                    }
                }
            }
        } // end of T

        int answer = 0;
        for (int j = 0; j < N; j++) {
            for (int l = 0; l < M; l++) {
                answer += map[j][l];
            }
        }

        System.out.println(answer);

    }

    private static void check(int x, int y, int value) {
        if (bmap[x][y]) return;
        else {
            bmap[x][y] = true;
            for (int i = 0; i < 4; i++) {
                int nx = x + dirx[i];
                int ny = y + diry[i];
                ny = (ny == -1) ? M - 1 : (ny == M) ? 0 : ny;
                if (isIn(nx) && map[nx][ny] == value) {
                    map[x][y] = 0;
                    map[nx][ny] = 0;
                    check(nx, ny, value);
                    flag = true;
                }
            }
        }
    }

    private static boolean isIn(int x) {
        return x >= 0 && x < N;
    }
}
