public class Solution {
    public bool IsPowerOfTwo(int n) {
        if(n == 0) return false;
        
        var pow = Math.Log2(n);
        return Math.Floor(pow) == pow;
    }
}
