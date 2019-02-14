let count=0;
function mergeSort(input){
    return{
        arr:divideAndConq(input),
        count
    }
}
function divideAndConq(input){
    count++;
    if(input.length<2)
        return input;
    let left=input.slice(0,input.length/2);
    let right=input.slice(input.length/2);
    return sortAndMerge(divideAndConq(left),divideAndConq(right));
}
function sortAndMerge(left,right){
    let result=[];
    let p1=0;
    let p2=0;
    while(p1<left.length && p2<right.length){
        count++;
        if(left[p1]<right[p2])
            result.push(left[p1++]);
        else    
            result.push(right[p2++]);
    }
    return result.concat(left.slice(p1)).concat(right.slice(p2));
}
module.exports={mergeSort};