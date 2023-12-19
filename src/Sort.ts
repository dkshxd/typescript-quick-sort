/**
 * Quick sort implemented in typescript to muck around with very basic coding in Typescript.
 * 
 * Adapted from the Java implementation
 * https://www.baeldung.com/java-quicksort
 */
export class Sort {

    /**
     * Sort a number array
     * 
     * @param toSort 
     * @returns 
     */
    public quickSort(toSort: number[]) : void  {
        if (toSort == null || toSort.length == 0) {
            return;
        } else {
            this.quickSortUsingIndex(toSort, 0, toSort.length - 1);
        }
    }

    /**
     * Quick sort algorithm 
     * 
     * @param arr 
     * @param begin 
     * @param end 
     */
    private quickSortUsingIndex(arr: number[], begin: number, end: number) : void {
        if (begin < end) {
            let partitionIndex: number = this.partition(arr, begin, end);
    
            this.quickSortUsingIndex(arr, begin, partitionIndex - 1);
            this.quickSortUsingIndex(arr, partitionIndex + 1, end);
        }
    }

    /**
     * Quick sort partitioning
     * 
     * @param arr 
     * @param begin 
     * @param end 
     * @returns 
     */
    private partition(arr: number[], begin: number, end: number) : number {
        let pivot: number = arr[end];
        let i: number = (begin - 1);
    
        for (let j : number = begin; j < end; j++) {
            if (arr[j] <= pivot) {
                i++;
    
                let swapTemp: number = arr[i];
                arr[i] = arr[j];
                arr[j] = swapTemp;
            }
        }
    
        let swapTemp : number = arr[i+1];
        arr[i + 1] = arr[end];
        arr[end] = swapTemp;
    
        return i + 1;
    }
}