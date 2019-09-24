var Arraysort = [2,9,15,40,19,13,17,30,0,6,5,1,7,8,'ray','12','doc','p','e','a','r','l']
var myObject ={'even':[],'odds':[],'chars':[]}

for (var y=0; y<=Arraysort.length; y++) { 
        if(Arraysort[y] % 2===0){
             myObject.even.push(Arraysort[y])
   }

  else if(Arraysort[y] % 2=== 1){
            myObject.odds.push(Arraysort[y])
   }

   else {
        myObject.chars.push(Arraysort[y])
   }
} 

console.log(myObject);
    
    
