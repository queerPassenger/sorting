const bubbleSort=require('./bubbleSort').bubbleSort;
const insertionSort=require('./insertionSort').insertionSort;
const mergeSort=require('./mergeSort').mergeSort;
const quickSort=require('./quickSort').quickSort;

let toBeSortedLists=[
    [1,2,3,4],
    [23,32,4,44,33,34,1,3,5,41,40],
    [4,3,2,1],
    [23,33,43,53,63,73,83,93,103],
    [103,93,83,73,63,53,43,33,22]
];

let algorithms=[];
toBeSortedLists.map((input)=>{
    algorithms.push([
        {name:'Bubble Sort',input,result:bubbleSort([...input])},
        {name:'Insertion Sort',input,result:insertionSort([...input])},
        {name:'Merge Sort',input,result:mergeSort([...input])},
        {name:'Quick Sort',input,result:quickSort([...input])},
    ])
})

algorithms.map(algorithm=>{
    console.log('\n','\t\t','Input','\t--------',algorithm[0].input,'\n');
    console.log('ALGORITHM','\t','N','\t','Iterations','\t','Output');
    console.log('---------','\t','-','\t','----------','\t','-----');
    algorithm.map(alg=>{
        console.log(alg.name,'\t',alg.input.length,'\t',alg.result.count,'\t',alg.result.arr,'\t');
    })
})