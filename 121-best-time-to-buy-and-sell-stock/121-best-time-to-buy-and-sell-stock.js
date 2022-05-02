/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minVal = prices[0]
    let ans = 0
    for(let i=1;i<prices.length;i++){
        minVal = Math.min(prices[i],minVal);
        
        let currDif = prices[i] - minVal;
        
        if(currDif != ans){
            ans = Math.max(currDif,ans)
        }
    }
    return ans
};