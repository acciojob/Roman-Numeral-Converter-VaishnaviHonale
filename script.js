function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	 var res = 0;
 
     for (i = 0; i < num.length; i++)
     {
         // Getting value of symbol s[i]
         var s1 = value(num.charAt(i));
 
         // Getting value of symbol s[i+1]
         if (i + 1 < num.length)
         {
             var s2 = value(num.charAt(i + 1));
 
             // Comparing both values
             if (s1 >= s2)
             {
                 // Value of current symbol
                 // is greater or equalto
                 // the next symbol
                 res = res + s1;
             }
             else
             {
                 // Value of current symbol is
                 // less than the next symbol
                 res = res + s2 - s1;
                 i++;
             }
         }
         else 
         {
             res = res + s1;
         }
     }
     return res;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
