const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };


const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    
    return valueInDollar;
}



function fromDollarToYen(valueInDollar){
   
    let  valueInYen= (valueInDollar * 127.9) / 1.2 ;
   
    return valueInYen;
}



function fromYenToPound(valueInYen){
    
    let  valueInPound= valueInYen * 0.006;
   
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

