// range error

function rang (){
    try{

let arr = new Array (-5);

    }

    catch (error){
        console.error(error.message);
    }
} rang ();


// referance error

function referance (){

    try{
        console.log(x);
    }
    catch (error){
        console.error(error.message)
    }
}referance ();

// url error

function generateURIError() {
    try {
        decodeURIComponent('%');  
    } catch (error) {
        console.error('Caught URIError:', error.message);
    }
}
generateURIError();

// type error

function type (){

    try {
        let tt = 157 ;
        tt.toUpperCase();
    }
    catch (ee){
        console.error(ee.message);
    }
}type ();


// 6

function ses (num){
try {
    if (typeof num !== 'number'){
        throw new error ('enter is not a number');
    }return num * num;
}catch(error){
    console.error(error.message)
}
}
console.log(ses (4));
console.log(ses ('s'));


// 7


function calculateBMI(weight, height) {
    try {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            throw new Error('Weight and height must be numbers');
        }
        if (weight <= 0 || height <= 0) {
            throw new Error('Weight and height must be greater than zero');
        }
        const bmi = weight / (height * height);
        return bmi.toFixed(2);
    } catch (error) {
        console.error('BMI Calculation Error:', error.message);
    }
}
console.log(calculateBMI(70, 1.75)); 
console.log(calculateBMI('90', 1.75));
console.log(calculateBMI(70, 0)); 
