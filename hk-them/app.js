//các số chia cho 2
/*const mang = [9,100,2,50,4,200,22,30];
 const filter =  mang.filter(el => el % 2 == 0);
 console.log(filter);*/
 //các số lớn hơn 7
/*const mang = [9,100,2,50,4,200,22,30];
 const filter =  mang.filter(el => el > 7);
 console.log(filter);*/
 // các số nhỏ hơn 5
 /*const mang = [9,100,2,50,4,200,22,30];
 const filter =  mang.filter(el => el < 5);
 console.log(filter);*/
 // các số nhỏ hơn 50 và nhân đôi
 const mang = [9,100,2,50,4,200,22,30];
 const filter =  mang.filter(el => el < 50 );
 function myFunc(currentvalue, num) {
    return currentvalue * 2;
}
console.log(myFunc);