//Jest tutorial from https://www.valentinog.com/blog/jest/

function filterByTerm(inputArr, searchTerm) { //tested function
	if (!searchTerm){ throw new Error("searchTerm cannot be empty")};
  	if (!inputArr.length){ throw new Error("inputArr cannot be empty")};

	const regex = new RegExp(searchTerm, "i"); //case-insensitive regular expression, that is, an expression that matches regardless of the string's case.
	return inputArr.filter(function(arrayElement){ //for each element of the input array we check the "url" property, matching it against a regular expression with the match method.
		return arrayElement.url.match(regex);
	});
}

module.exports = filterByTerm;
