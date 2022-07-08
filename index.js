//problem 1
function reverseNum(num){
    let toString = String(num);
    let tempArray = Array.from(toString.split(''));
    let reversedNumber = tempArray.reverse().join('');
    return reversedNumber;
}

//problem 2
function isPalindrome(text){
    let tempArray = Array.from(text);
    let reversedText = tempArray.reverse().join('');
    return text == reversedText;
}
//problem 3
function allPossibilities(word){
    let combinations = [];
    for(let i=0; i<word.length; i++){
        for(let j=i+1; j<word.length+1; j++){
            combinations.push(word.slice(i,j));
        }
    }
    return combinations.join(',');
}
//problem 4
function alphabeticalOrder(word){
    let tempArray = Array.from(word);
    let sorted = tempArray.sort().join('');
    return sorted;
}

console.log(alphabeticalOrder("webmaster"));