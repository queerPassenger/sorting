function bubbleSort(input){
    let count=0;
    let arr=[...input];
    let swapped=true;
    for(let i=0;i<arr.length;i++){
        count++;
        swapped=false;
        for(let j=1;j<arr.length;j++){
            count++;
            if(arr[j]<arr[j-1]){
                arr[j]=arr[j]+arr[j-1];
                arr[j-1]=arr[j]-arr[j-1];
                arr[j]=arr[j]-arr[j-1];
                swapped=true;
            }
        }
    }
    return{
        arr,
        count
    }
}
module.exports={bubbleSort};