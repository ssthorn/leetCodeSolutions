const numerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

romanToInt=(s)=>{
    let result = ''
    for (i = 0; i < s.length; i++){
        const thisOne = numerals[s[i]];
        const nextOne = numerals[s[i+1]];
        if(thisOne < nextOne){
            result += nextOne - thisOne;
            i++
        }else{
            result += thisOne
        }
    }
    console.log(result)
}
romanToInt("IV")
