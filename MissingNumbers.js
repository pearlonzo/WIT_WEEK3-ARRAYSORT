var Numbers =[1,3,4,6,8,10]
count = Numbers[Numbers.length-1];
var missing = [];
   for(var b=1;b<count; b++){
        if(Numbers.indexOf(b)==-1){
            missing.push(b);
            console.log(missing); 

     }
}