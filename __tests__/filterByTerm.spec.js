//Jest tutorial from https://www.valentinog.com/blog/jest/

const filterByTerm = require("../src/filterByTerm"); // tested function


describe("Filter function", () => { //describe: a Jest method for containing one or more related tests, it takes two arguments: a string for describing the test suite and a callback function for wrapping the actual test.
	//test input:
	const input = [
		{ id: 1, url: "https://www.url1.dev" },
		{ id: 2, url: "https://www.url2.dev" },
		{ id: 3, url: "https://www.link3.dev" }
	];

	//expected results:
	const firstOutput = [
		{ id: 3, url: "https://www.link3.dev" }
	];
	const secondOutput =[
		{ id: 1, url: "https://www.url1.dev" },
		{ id: 2, url: "https://www.url2.dev" }
	];
	
	test("it should filter by a search term (link) and (url)", () => { //test function
		//actual tests:
		//For every object our function must check a property called "url" and if the value of the property matches a given term then it should include the matching object in the resulting array.
		expect(filterByTerm(input, "link")).toEqual(firstOutput);
		expect(filterByTerm(input, "url")).toEqual(secondOutput)

	});

	test("filterByTerm should account also for uppercase search terms. In other words it should return the matching objects even if the search term is an uppercase string:" , () => {
		expect(filterByTerm(input, "LINk")).toEqual(firstOutput);
		expect(filterByTerm(input, "UrL")).toEqual(secondOutput);
	})

	test("testing Errors", () => {
		//If you need to test an existing function whether it throws with a set of arguments, you have to wrap it inside an anonymous function in expect().
		expect(() => {filterByTerm(input, "")}).toThrow(new Error("searchTerm cannot be empty"));
		expect(() => {filterByTerm([], "url")}).toThrow(new Error("inputArr cannot be empty"));
	})
});
