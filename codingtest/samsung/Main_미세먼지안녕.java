package codingtest.samsung;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_미세먼지안녕 {

    private static int R, C;
    private static int[] dirx = {0, 1, 0, -1};
    private static int[] diry = {1, 0, -1, 0};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        int T = Integer.parseInt(st.nextToken());

        int[][] map = new int[R][C], afterMap = new int[R][C], blankMap = new int[R][C];
        int[] airVacum = new int[2];
        int index = 0, answer = 0;

        for (int i = 0; i < R; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < C; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
                if(map[i][j] == -1) {
                    airVacum[index++] = i;
                    afterMap[i][j] = -1;
                    blankMap[i][j] = -1;
                } // remember position of airVacum
            }
        } // end of input



        for (int time = 0; time < T; time++) {
            // 미세먼지 확산
            int dCnt = 0, nx = 0, ny = 0;
            for (int i = 0; i < R; i++) {
                for (int j = 0; j < C; j++) {
                    // 미세먼지가 있다면? 인접한 방향으로 확산
                    dCnt = 0;
                    if(map[i][j] > 0) {
                        for (int dir = 0; dir < 4; dir++) {
                            nx = i + dirx[dir];
                            ny = j + diry[dir];
                            if(isIn(nx, ny) && ( nx != airVacum[0] || ny != 0 ) && ( nx != airVacum[1] || ny != 0 )) {
                                dCnt++;
                                afterMap[nx][ny] += map[i][j]/5;
                            }
                        }
                        afterMap[i][j] += map[i][j] - ((map[i][j]/5) * dCnt);
                    }
                }
            }

            // 공기청정기 작동
            // 반시계
            afterMap[airVacum[0]-1][0] = 0;
            for (int i = airVacum[0]-2; i >= 0; i--) {
                afterMap[i+1][0] = afterMap[i][0];
            }
            for (int i = 0; i < C-1; i++) {
                afterMap[0][i] = afterMap[0][i+1];
            }
            for (int i = 0; i < airVacum[0]; i++) {
                afterMap[i][C-1] = afterMap[i+1][C-1];
            }
            for (int i = C-1; i > 1; i--) {
                afterMap[airVacum[0]][i] = afterMap[airVacum[0]][i-1];
            }
            afterMap[airVacum[0]][1] = 0;

            // 시계
            afterMap[airVacum[1]+1][0] = 0;
            for (int i = airVacum[1]+2; i < R; i++) {
                afterMap[i-1][0] = afterMap[i][0];
            }
            for (int i = 0; i < C-1; i++) {
                afterMap[R-1][i] = afterMap[R-1][i+1];
            }
            for (int i = R-1; i > airVacum[1]; i--) {
                afterMap[i][C-1] = afterMap[i-1][C-1];
            }
            for (int i = C-1; i > 1; i--) {
                afterMap[airVacum[1]][i] = afterMap[airVacum[1]][i-1];
            }
            afterMap[airVacum[1]][1] = 0;
            // 청소 끝

            for (int i = 0; i < R; i++) {
                map[i] = afterMap[i].clone();
                afterMap[i] = blankMap[i].clone();
            }
        } // end of T

        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                if(map[i][j] > 0) answer += map[i][j];
            }
        }

        System.out.println(answer);
    }

    static boolean isIn(int x, int y) {
        return x >= 0 && y >= 0 && x < R && y < C;
    }
}
