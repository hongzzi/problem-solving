package codingtest.samsung;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class Main_뱀 {

    private static int N;
    private static int[] dirx = {0, 1, 0, -1};
    private static int[] diry = {1, 0, -1, 0};

    static class Position {
        int x;
        int y;

        public Position(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        int K = Integer.parseInt(br.readLine());

        int[][] map = new int[N][N];

        for (int apple = 0; apple < K; apple++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken()) - 1;
            int y = Integer.parseInt(st.nextToken()) - 1;
            map[x][y] = 1;
        }

        int L = Integer.parseInt(br.readLine());

        String[][] opr = new String[L][2];

        for (int i = 0; i < L; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            opr[i][0] = st.nextToken();
            opr[i][1] = st.nextToken();
        }


        // 뱀 머리 꼬링
        Deque<Position> snake = new ArrayDeque<>();
        snake.add(new Position(0, 0));

        map[0][0] = -1;
        int nowDir = 0, time = 0, index = 0;
        boolean conflict = false;

        while (!conflict) {
            time++;
            Position nPo = snake.peekLast();
            int nx = nPo.x + dirx[nowDir];
            int ny = nPo.y + diry[nowDir];
            snake.add(new Position(nx, ny));
            if (!isIn(nx, ny) || map[nx][ny] == -1) {
                conflict = true;
            } else {
                if (map[nx][ny] != 1) {
                    Position lPo = snake.pollFirst();
                    map[lPo.x][lPo.y] = 0;
                }
                map[nx][ny] = -1;

                if (index < L && Integer.parseInt(opr[index][0]) == time) {
                    nowDir = opr[index][1].equals("L") ? (nowDir + 3) % 4 : (nowDir + 1) % 4;
                    index++;
                }
            }
        }

        System.out.println(time);

    }

    static boolean isIn(int x, int y) {
        return x >= 0 && y >= 0 && x < N && y < N;
    }
}
