//The first two elements are compare, if the previous elements is larger than the latter element, the position is swaped. Repeat this process, until sorting is completed
class BubleSorting {
    static sort(arrays) {
        for (var i = 0; i < arrays.length - 1; i++) {
            for (var j = 0; j < arrays.length - 1; j++) {
                if (arrays[j] > arrays[j + 1]) {
                    var flag = arrays[j];
                    arrays[j] = arrays[j + 1];
                    arrays[j + 1] = flag
                }
            }
        }
    }
}

//select the smallest one of the remaining unordered elements in the array, inserting the one that
//been sorted before
class SelectSort {
    static sort(arrays) {
        var len = arrays.length - 1;
        var minIndex; //save the index of the selected minimum
        for (var i = 0; i < len; i++) {
            minIndex = i;
            //Save the minimum value of each loop as the first element
            var minValue = arrays[minIndex];
            for (var j = i; j < len; j++) {
                //compare with each element if it is less than the minimum value, exchange the minIndex
                if (minValue > arrays[j + 1]) {
                    minValue = arrays[j + 1];
                    minIndex = j + 1;
                }
            }
            // if minimum index changes, the current minimum is exchanged with the minIndex
            if (i != minIndex) {
                var temp = arrays[i];
                arrays[i] = arrays[minIndex];
                arrays[minIndex] = temp;
            }
        }
    }
}

var score = [90, 70, 50, 80, 45, 78, 5];
console.log("score before: ", score);
SelectSort.sort(score);
console.log("score after: ", score);

//Take an unsorted new element in the array, compare it with the already sorted element before, insert
// a new element to the right if the new element is smaller than the sorted element.
class InsertSort {
    static sort(arrays) {
        for (var i = 0; i < arrays.length; i++) {
            var insertElement = arrays[i] //Take unsorted new elements
            var insertPosition = i; //Insert position
            for (var j = insertPosition - 1; j >= 0; j--) {
                //if the new elements is smaller than the sorted element, shifted to the right
                if (insertElement < arrays[j]) {
                    arrays[j + 1] = arrays[j];
                    insertPosition--;
                }
            }
        }
        arrays[insertPosition]=insertElement; //insertElement
    }
}