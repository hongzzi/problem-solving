package codingtest.samsung;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main_감시 {

    static class Camera implements Comparable<Camera>{
        int x;
        int y;
        int type;

        public Camera(int x, int y, int type) {
            this.x = x;
            this.y = y;
            this.type = type;
        }

        @Override
        public int compareTo(Camera o) {
            if(this.type < o.type) return 1;
            else if(this.type > o.type) return -1;
            return 0;
        }

        @Override
        public String toString() {
            return "type=" + type;
        }
    }

    private static boolean[][] copyMap;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[][] map = new int[N][M];
        copyMap = new boolean[N][M];
        PriorityQueue<Camera> cameraList = new PriorityQueue<Camera>();

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
                if (map[i][j] > 0) {
                    copyMap[i][j] = true;
                    if (map[i][j] != 6) {
                        cameraList.offer(new Camera(i, j, map[i][j]));
                    }
                }
            }
        } // end of input

        System.out.println(cameraList.toString());
    }

    public static void serve() {

    }
}
