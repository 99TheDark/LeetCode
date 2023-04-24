class Solution {
    public int combine(int[] arr) {
        int total = 0;
        int m = (int) Math.pow(10, arr.length - 1);
        for(int val : arr) {
            total += val * m;
            m /= 10;
        }
        return total;
    }
    public int[] swap(int[] arr, int a, int b) {
        int[] swapped = new int[arr.length];
        for(int i = 0; i < arr.length; i++) {
            if(i == a) {
                swapped[i] = arr[b];
            } else if(i == b) {
                swapped[i] = arr[a];
            } else {
                swapped[i] = arr[i];
            }
        }
        return swapped;
    }
    public int[] prevPermOpt1(int[] arr) {
        // [4, 3, 2, 1]
        // Swap 4 with 3, 2 and 1
        // Swap 3 with 2 and 1
        // Swap 2 with 1
        int cur = combine(arr);
        int max = Integer.MIN_VALUE;
        int[] maxarr = arr;
        for(int i = arr.length - 1; i > 0; i--) {
            for(int j = i - 1; j >= 0; j--) {
                int[] swapped = swap(arr, i, j);
                int val = combine(swapped);
                if(val > max && val < cur) {
                    max = val;
                    maxarr = swapped;
                }
            }
        }

        return maxarr;
    }
}
