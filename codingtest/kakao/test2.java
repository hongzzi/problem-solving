import java.util.*;

class Solution {
    Map<String, Integer> menu;

    public String[] solution(String[] orders, int[] course) {
        List<String> list = new ArrayList<>();

        for (int i = 0; i < orders.length; i++) {
            String[] charArr = orders[i].split("");
            Arrays.sort(charArr);
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < charArr.length; j++) {
                sb.append(charArr[j]);
            }
            orders[i] = sb.toString();
        }

        for (int i = 0; i < course.length; i++) {
            menu = new HashMap<>();
            for (int j = 0; j < orders.length; j++) {
                if (course[i] > orders[j].length())
                    continue;
                boolean[] visited = new boolean[orders[j].length()];
                setMenu(orders[j].split(""), visited, "", course[i], 0);
            }

            int max = 2;
            for (String key : menu.keySet()) {
                if (menu.get(key) >= max)
                    max = menu.get(key);
            }
            if (max >= 2) {
                for (String key : menu.keySet()) {
                    if (menu.get(key) == max) {
                        list.add(key);
                    }
                }
            }
        }

        String[] answer = new String[list.size()];
        for (int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        Arrays.sort(answer);
        // System.out.println(Arrays.toString(answer));

        return answer;
    }

    public void setMenu(String[] menus, boolean[] visited, String res, int count, int idx) {
        if (count == res.length()) {
            if (menu.containsKey(res)) {
                menu.put(res, menu.get(res) + 1);
            } else {
                menu.put(res, 1);
            }
            return;
        }

        for (int i = idx; i < menus.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                setMenu(menus, visited, res + menus[i], count, i);
                visited[i] = false;
            }
        }
    }
}