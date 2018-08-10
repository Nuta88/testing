window.onload = function() {
	document.getElementById("button").onclick = function() {
		var inputString = document.getElementById("textarea").value;
		var elementOfHtml = document.getElementById("write");
		var convertTheStringIntoAnArray = inputString.split(" ");
		var getFinishString = start(convertTheStringIntoAnArray);

		function start(elementsOfArray) {
			var arrayOfStrings = [];
			for (var i = 0; i < elementsOfArray.length; i++) {
				var arrayOfElements = getArrayOfElements(elementsOfArray[i]);
				arrayOfStrings.push(reverseElementsInArray(arrayOfElements));
			}
			return convertTheArrayToString(arrayOfStrings, " ");
		}

		addStringToHtml(elementOfHtml, getFinishString);
	};

	function getArrayOfElements(string) {
		var anArrayOfElements = [];
		for (var i = 0; i < string.length; i++) {
			anArrayOfElements[i] = string[i];
		}
		return anArrayOfElements;
	}

	function reverseElementsInArray(alphabetArray) {
		var i = 0;
		var j = alphabetArray.length - 1;
		while (i < j) {

			if (isNotLetterElement(alphabetArray[i])) {
				i++;
				continue;
			}
			if (isNotLetterElement(alphabetArray[j])) {
				j--;
				continue;
			}

			swapElements(alphabetArray, i, j);
			i++;
			j--;
		}
		return convertTheArrayToString(alphabetArray, "");
	}

	function swapElements(alphabetArray, firstElementIndex, secondElementIndex) {
		var temp = alphabetArray[firstElementIndex];
		alphabetArray[firstElementIndex] = alphabetArray[secondElementIndex];
		alphabetArray[secondElementIndex] = temp;
	}

	function isNotLetterElement(element) {
		if (element.search(/[a-zA-Z]+/i ) === -1) {
			return true;
		}
		
		return false;
	}

	function convertTheArrayToString(elements, splitStrind) {
		return elements.join(splitStrind);
	}

	function addStringToHtml(elementOfHtml, string) {
		elementOfHtml.innerHTML = string;
		
	}
	
	
//	testing function
//	testIsNotLetter();
	function testIsNotLetter() {
		var input = "4";
		if(isNotLetterElement(input)) {
			document.write("function is good");
		} else {
			document.write("fanction is bad");
		}
	}

};
