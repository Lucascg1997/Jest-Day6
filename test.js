const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


test("One euro should be 1.206 dollars", function(){
   
    const { fromEuroToDollar } = require('./app.js')

    const expected = 3.5 * 1.2; 
  
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})




test("One dollar should be 106.2 yen", function(){
   
    const { fromDollarToYen } = require('./app.js')

    const expected = 127.9 / 1.2; 

     expect(expected).toBe(fromDollarToYen(1)); 
})



test("One yen should be 0.006 Pound", function(){
    
    const { fromYenToPound } = require('./app.js')

    const expected = 3.5 * 0.006; 

     expect(fromYenToPound(3.5)).toBe(0.021); 
})


