package java;
public class PermComb {
    public static void main(String[] args) {

        int[] arr1 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int[] arr2 = new int[3];

        int[] arr3 = new int[4];
        boolean[] flag = new boolean[4];

        int[] arr4 = { 1, 2, 3, 4 };
        perm2(arr4, 0);
    }

    private static void comb(int[] arr, int r, int n, int index, int target) {
        if (r == 0) {
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i]);
            }
            System.out.println();
        } else if (target == n)
            return;
        else {
            arr[index] = target;
            comb(arr, r - 1, n, index + 1, target + 1);
            comb(arr, r, n, index, target + 1);
        }

    }

    private static void perm(int[] arr, boolean[] brr, int r, int c) {
        if (r == arr.length) {
            for (int i = 0; i < r; i++) {
                System.out.print(arr[i]);
            }
            System.out.println();
        } else {
            for (int i = 0; i < c; i++) {
                if (!brr[i]) {
                    arr[r] = i;
                    brr[i] = true;
                    perm(arr, brr, r + 1, c);
                    brr[i] = false;
                }
            }
        }
    }

    private static void perm2(int[] arr, int r) {
        if (r == arr.length - 1) {
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i]);
            }
            System.out.println();
        } else {
            for (int i = r; i < arr.length; i++) {
                int temp = arr[r];
                arr[r] = arr[i];
                arr[i] = temp;
                perm2(arr, r + 1);
                temp = arr[i];
                arr[i] = arr[r];
                arr[r] = temp;
            }
        }
    }
}
