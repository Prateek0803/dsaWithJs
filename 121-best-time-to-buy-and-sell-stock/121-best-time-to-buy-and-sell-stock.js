/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minVal  = prices[0]
    let maxDiff = 0
    
    for(let i = 1; i < prices.length; i++ ){
        
        minVal = Math.min(prices[i],minVal)
        
        let currMin = prices[i] - minVal
        
        if(currMin != maxDiff){
            maxDiff = Math.max(currMin, maxDiff)
        }
    }
    return maxDiff;
};