const duration =(str)=>{
    const arr =str.split(':');
    console.log(Array.isArray(arr));
    const result = arr[0].padStart(2,'0');
    return result;
}

const ans = duration("01:00:00");
console.log(ans);