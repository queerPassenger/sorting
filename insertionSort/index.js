function insertionSort(input){
    let count=0;
    let arr=[...input];
    for(let i=0;i<arr.length;i++){
        count++;
        if(arr[i]<arr[i-1]){
            arr[i]=arr[i]+arr[i-1];
            arr[i-1]=arr[i]-arr[i-1];
            arr[i]=arr[i]-arr[i-1];
            let temp=i-1;
            while(temp>0){
                count++;
                if(arr[temp]<arr[temp-1]){
                    arr[temp]=arr[temp]+arr[temp-1];
                    arr[temp-1]=arr[temp]-arr[temp-1];
                    arr[temp]=arr[temp]-arr[temp-1];
                }
                else    
                    break;

                temp--;
            }
        }
    }
    return{
        arr,
        count
    }
}
module.exports={insertionSort};