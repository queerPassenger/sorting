let count;
function quickSort(input){
    count=0;
    return{
        arr:partitionInput(input),
        count
    };
}
function partitionInput(input){
    if(input.length<2)
        return input;
    count++;
    let pivot=input.length-1;
    let i=0;
    let j=pivot-1;
    let toSwapi=null;
    let toSwapj=null;
    while(i<j){
        count++;
        if(toSwapi!==null && toSwapj!==null){
            input[toSwapi]=input[toSwapi]+input[toSwapj];
            input[toSwapj]=input[toSwapi]-input[toSwapj];
            input[toSwapi]=input[toSwapi]-input[toSwapj];
            toSwapi=null;
            toSwapj=null;
            i++;
            j--;
        }
        else{
            if(toSwapi===null){
                if(input[i]>input[pivot])
                    toSwapi=i;
                else
                    i++;
            }
            else if(toSwapj===null){
                if(input[j]<input[pivot])
                    toSwapj=j;
                else    
                    j--;
            }
        }
    }
    if(input[i]<input[pivot])
        i++;
    return [...partitionInput(input.slice(0,i)),...partitionInput([input.pop()]),...partitionInput(input.slice(i))]
}

module.exports={quickSort}