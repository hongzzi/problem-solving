package codingtest.ebay;

public class Solution_은행창구대기 {

    public static void main(String[] args) {
        int result = solution(2, new int[][] { { 0, 3 }, { 2, 5 }, { 4, 2 }, { 5, 3 } });
        System.out.println(result);
    }

    public static int solution(int N, int[][] simulation_data) {
        int answer = 0;
        int[] employee = new int[N];
        int beforeTime = 0;
        for (int[] data : simulation_data) {
            for (int i = 0; i < employee.length; i++) {
                employee[i] -= data[0] - beforeTime;
                employee[i] = employee[i] < 0 ? 0 : employee[i];
            }
            int min = 0;
            for (int i = 0; i < employee.length; i++) {
                min = employee[i] <= employee[min] ? i : min;
                if (employee[i] == 0)
                    break;
            }
            answer += employee[min];
            beforeTime = data[0];
            employee[min] += data[1];
        }
        return answer;
    }
}