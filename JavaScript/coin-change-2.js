/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
    // Create a table using a 2D array to store possible ways to make the amount
    // Inititate every cell to 0
    let dp = new Array(coins.length + 1).fill(0).map(()=>new Array(amount + 1).fill(0));
    // The first row in our table handles the case of using 0 coins to make a certain amount
    // There is only way to make an amount of 0 when using 0 coins
    dp[0][0] = 1;
    // Loop through all the rows in the table
    for (let rowIndex=1;rowIndex<dp.length;rowIndex++) {
        // There is 1 way to make an amount of 0 with any coin (which is to not use it)
        dp[rowIndex][0] = 1;
        // Loop through all columns in the row and find the total number of ways to make each amount
        for (let currentAmount=1; currentAmount<dp[0].length; currentAmount++) {
            // We build off of previous solutions by adding all the previous ways we 
            // made the current amount by looking at the cell located in the row above
            // our current cell [rowIndex-1] and in the same column [currentAmount]
            dp[rowIndex][currentAmount] = dp[rowIndex-1][currentAmount];
            // Is the coin we are currently looking is less than the current amount?
            // If it is then we will use the solution from a previous cell in the row of this coin
            // and add it to the current cell
            if (coins[rowIndex-1] <= currentAmount) {
                // Subtract the current coin from the current amount
                // Go to the cell in the row at [current amount - current coin]
                // Add the total number of ways in this cell to our current cell
                dp[rowIndex][currentAmount]+= dp[rowIndex][currentAmount-coins[rowIndex-1]];
            }
        }
    }

    return dp[coins.length][amount];
};
