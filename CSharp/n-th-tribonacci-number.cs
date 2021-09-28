public class Solution {
    public int Tribonacci(int n) {
        
    if (n <= 1)  
    {  
        return n;  
    }  
    int[] numbers = new int[n + 1];  
    numbers[0] = 0;  
    numbers[1] = 1;  
    numbers[2] = 1;  
    Enumerable.Range(3, n - 2).ToList().ForEach(i=> numbers[i] = numbers[i - 1] + numbers[i - 2] + numbers[i - 3]);  
    return numbers[n];  
}  
        
}
