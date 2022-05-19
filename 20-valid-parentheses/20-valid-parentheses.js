/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = []
    if(s.length === 1) return false
    for(let i=0;i<s.length;i++){
        if(s[i] === '[' || s[i] === '(' || s[i] === '{'){
            st.push(s[i])
        }else if(s[i] === ']'){
            if(st.length === 0) return false
            else if(st[st.length-1] !== '[') return false;
            else st.pop()
        }
        else if(s[i] === ')'){
            if(st.length === 0) return false
            else if(st[st.length-1] !== '(') return false;
            else st.pop()
        }
        else if(s[i] === '}'){
            if(st.length === 0) return false
            else if(st[st.length-1] !== '{') return false;
            else st.pop()
        }
    }
    
    if(st.length === 0) return true;
    else return false
};