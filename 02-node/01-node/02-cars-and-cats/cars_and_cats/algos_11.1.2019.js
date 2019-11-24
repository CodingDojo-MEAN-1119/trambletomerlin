//Array: Flatten
//Flatten a given array, eliminating nested & empty arrays. Do not alter it; return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4] .
//Second: work ‘in-place’ in the given array (do not create another). Alter order if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2] .
//Third: make your algorithm both in-place and stable . Do you need a return value?

function flatten(arr){
    var newarray = [];
    for (var i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])) {
            for(var j = 0; j<arr[i].length;j++){
                console.log('in the if check');
                var temp = arr[i][j];
                newarray.push(temp);
            }
        }
        else {
            console.log('No arrays')
            newarray.push(arr[i]);
        }
    }
    return newarray;
}
console.log(flatten([1,[2,3],4,[]]));
