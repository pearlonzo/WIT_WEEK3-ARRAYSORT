function pearl(Arraysort){
     var myObject ={'even':[],'odds':[],'chars':[]}

for (var y=0; y<Arraysort.length; y++) { 
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
return myObject; 
}
var a=pearl([1,4,7,"pearl",9,5,8,6,10,11,"y","p"])
console.log(a);
module.exports=pearl

    
