


const romanToInt = (s) => {
//     for (let char of "IVXLCDM"){
//         console.log(char)
//     }
// }
    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;
    // let translation = '';
    // for (let i in s){
    //     if ( s === s[i]){
    //         console.log(s)
            
    //     }else{
    //         console.log("not found")
    //     }
    //     }
    // }
    let newString = '';
    let numeralValue = 0;
    for(let i=0 ; i < s.length ; i++){
        let x = s[i];
        if (x === "I"){
            numeralValue += 1;
        }
        if (x === "V"){
            numeralValue += 5;
        }
        newString += (x);
        
    }
    console.log(newString)
    console.log(numeralValue)
    

}
        
romanToInt("IV")

