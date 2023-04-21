public class Solution {
    public int ComputeArea(
        int ax1, int ay1, int ax2, int ay2, 
        int bx1, int by1, int bx2, int by2
    ) {
        int w1 = ax2 - ax1;
        int h1 = ay2 - ay1;
        int w2 = bx2 - bx1;
        int h2 = by2 - by1;

        if(
            ax2 < bx1 ||
            bx2 < ax1 ||
            ay2 < by1 ||
            by2 < ay1
        ) return w1 * h1 + w2 * h2;

        int left = Math.Max(ax1, bx1);
        int right = Math.Min(ax2, bx2);
        int bottom = Math.Max(ay1, by1);
        int top = Math.Min(ay2, by2);

        int width = right - left;
        int height = top - bottom;

        return w1 * h1 + w2 * h2 - width * height;
    }
}
