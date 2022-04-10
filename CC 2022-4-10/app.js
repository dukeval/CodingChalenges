// Timmy & Sarah think they are in love, but around where they live, 
//they will only know once they pick a flower each. If one of the flowers 
//has an even number of petals and the other has an odd number of petals 
//it means they are in love.  Write a function that will take the number of 
//petals of each flower and return true if they are in love and false if they aren't.

function LovePetalCalculator(petal1, petal2){
   // return ((petal1 %2 ===0 || petal2 % 2 === 0) && (petal1 %2 !==0 || petal2 % 2 !==0))?true:false;
   return ((isEven(petal1) || isEven(petal2)) && (!isEven(petal1) || !isEven(petal2)))?true:false;
}

function isEven(number){
    return number%2 ===0 ? true:false;
}