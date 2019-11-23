function bracesWild(str){
    const match = {
        '(':')',
        '[':']',
        '{':'}'
    };
    const matchingBrances = [];

    for(var i = 0; i < str.length; i++){
    const runner = str[i];
    if(match[runner]) {
        matchingBrances.push(runner);
    } else {
        if (runner !== match[matchingBrances.pop()]) {
            return "Invalid braces";
        }
     }
    }
    if(matchingBrances.length === 0){
        return "Validated"
    } else {
        return "Invalid"
    }
}

console.log(bracesWild("{()}({[[]]})"));
console.log(bracesWild("(})"));
