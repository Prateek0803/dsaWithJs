/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
      const checkPalindrome = (s,i,j) =>{
            while(i<j){
                if(s.charAt(i) != s.charAt(j)){
                    return false;
                }
                i++
                j--
            }
            return true;
        }
        
        let i = 0;
        let j = s.length - 1;
        
        while(i<j){
            if(s.charAt(i) != s.charAt(j)){
                return(checkPalindrome(s,i+1,j) || checkPalindrome(s,i,j-1))
            }
            i++;
            j--;
        }
        return true  
};