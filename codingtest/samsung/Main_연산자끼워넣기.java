package codingtest.samsung;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_연산자끼워넣기 {

    private static int min = Integer.MAX_VALUE;
    private static int max = Integer.MIN_VALUE;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());

        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int[] opr = new int[4];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < 4; i++) {
            opr[i] = Integer.parseInt(st.nextToken());
        }

        dfs(1, arr[0], arr, opr);

        System.out.println(max);
        System.out.println(min);
    }

    public static void dfs(int k, int sum, int[] arr, int[] opr) {
        if (k == arr.length) {
            min = min > sum ? sum : min;
            max = max < sum ? sum : max;
        } else {
            for (int i = 0; i < opr.length; i++) {
                int temp = 0;
                if(opr[i] > 0) {
                    opr[i]--;
                    switch (i) {
                        case 0:
                            temp = sum + arr[k];
                            break;
                        case 1:
                            temp = sum - arr[k];
                            break;
                        case 2:
                            temp = sum * arr[k];
                            break;
                        case 3:
                            temp = sum / arr[k];
                            break;
                    }
                    dfs(k+1, temp, arr, opr);
                    opr[i]++;
                } else {
                    continue;
                }
            }
        }
    }
}
