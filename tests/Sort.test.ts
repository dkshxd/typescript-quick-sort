import { Sort } from "../src/Sort";

const sorter = new Sort();

describe("Sort", () => {

	it("Sorts an empty array list", () => {
        let emptyArray: number[] = [];
        emptyArray.length == 0;
        sorter.quickSort(emptyArray);

		expect(emptyArray.length).toEqual(0);
	});

    it("Sorts a 2 number array", () => {
        let toSort: number[] = [4, 2];
        toSort.length == 0;
        sorter.quickSort(toSort);

        expect(toSort).toEqual([2, 4]);
	});

    it("Should keep order if it's already sorted", () => {
        let toSort: number[] = [1, 2, 3, 4, 5];
        toSort.length == 0;
        sorter.quickSort(toSort);

		expect(toSort.length).toEqual(5);
        expect(toSort).toEqual([1, 2, 3, 4, 5]);
	});


    it("Should sort a bigger array", () => {
        let toSort: number[] = [1, 5, 3, 4, 2];
        toSort.length == 0;
        sorter.quickSort(toSort);

		expect(toSort.length).toEqual(5);
        expect(toSort).toEqual([1, 2, 3, 4, 5]);
	});
});
