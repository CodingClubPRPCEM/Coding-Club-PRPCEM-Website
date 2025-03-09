import java.util.*;

class k {
    public static int coinChange(int[] inputs, int input2, int input3) {
        int amount = input3;
        int[] coins = inputs;

        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1); // Use amount + 1 as an effectively "infinite" value
        dp[0] = 0;

        for (int coin : coins) {  // Ensure we iterate over coins first
            for (int i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }

        return dp[amount] == amount + 1 ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        int[] coins = {1, 2, 5};
        int input2 = 3; // Not used in logic
        int input3 = 11;
        System.out.println(coinChange(coins, input2, input3)); // Should print 3
    }
}
