public class SnapshotArray {

    private List<int[]> snapshots;
    private int[] arr;
    private int id = 0;

    public SnapshotArray(int length) {
        snapshots = new List<int[]>();
        arr = new int[length];
    }
    
    public void Set(int index, int val) {
        arr[index] = val;
    }
    
    public int Snap() {
        // Shallow copy
        int[] copy = new int[arr.Length];
        for(int i = 0; i < arr.Length; i++) copy[i] = arr[i];
        snapshots.Add(copy);
        return id++;
    }
    
    public int Get(int index, int snap_id) {
        return snapshots[snap_id][index];
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * SnapshotArray obj = new SnapshotArray(length);
 * obj.Set(index,val);
 * int param_2 = obj.Snap();
 * int param_3 = obj.Get(index,snap_id);
 */
