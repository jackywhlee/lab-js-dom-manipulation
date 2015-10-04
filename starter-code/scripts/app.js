window.onload = function() {

function getValue(id) {
	return document.getElementById(id).value
};

function getFloat(id) {
	return parseFloat(getValue(id))
};

function basicCalc() {
	var num1 = getFloat("basic-num-1");
	var num2 = getFloat("basic-num-2");
	var oper = getValue("basic-operation");
	var ans;

	switch(oper) {
		case "+":
		ans = num1 + num2;
		break;
		case "-":
		ans = num1 - num2;
		break;
		case "*":
		ans = num1 * num2;
		break;
		case "/":
		ans = num1 / num2;
		break;
	}

	document.getElementById("basic-answer-alert").innerHTML = num1 + oper + num2 + "=" + ans;
}

document.getElementById("basic-calc").addEventListener("click", basicCalc)

}



