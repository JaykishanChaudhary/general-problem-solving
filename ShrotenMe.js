// Problem - 

// Shorten me!

// Implement 2 functions, one that shortens a string of values by replacing consecutive data elements with just one data value and count of the consecutive values.

// For Example, we can shorten the characters “AAAAAAAAAAABWWWWWWWWWWWBB” with “11AB11W2B”

// The other function should take the shortened string and give back the original value

// For example, we take the above-shortened characters “11AB11W2B” and get back “AAAAAAAAAAABWWWWWWWWWWWBB”

// For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. 
// This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.


// --------------------------------------------------------------------------------------------


// Shorten -  O(n) Time Complexity

function ShortenMe(String){
    let count=1;
    let str='';
  for(let i=0;i<String.length;i++){
    if(String[i]==String[i+1]){
        count++;
    }else{
        if(count>1){
            str+=count;
        }
        str+=String[i];
        count=1
    }
  }
  return str
}
console.log(ShortenMe("AAAAAAAAAAABWWWWWWWWWWWBB"))


/// Elongate - O(n) time complexity


function ElongateMe(str){
    n = str.length
    res = ""
    substr = ""
    for (let i = 0; i < n; i++) {
        if (str[i] >= 1 && str[i] < 10){
            substr += str[i]
        } else {
            repeatedString = ""
            if (substr == "") {
                repeatedString = str[i]
            } else {
                repeatedString = str[i].repeat(Number(substr));
            }
            res += repeatedString
            substr = ""
        }        
    }
    return res
}
console.log(ElongateMe("11A5BCB2N"));