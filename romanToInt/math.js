//returns even or odd elements in array

const numerals = ["I","V","X","L","C","D","M"],
    numerals_alt = [],
    numerals_alt2 = [];

    for(let i = 0;i < numerals.length;i++){
        if((i+2) % 2 == 0){
            numerals_alt2.push(numerals[i]);
            

        }else{
            numerals_alt.push(numerals[i]);
        }
    }
    numerals_alt[0] = 5;
    console.log(numerals);
    console.log(numerals_alt);
    console.log(numerals_alt2);
    

