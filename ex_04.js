let a = 2;
let b = 4;
let action = "sub";

function calculator()
{
    if(action === "add")
	{
		return addition(a, b);	
    }
    else if(action === "sub")
    {
	    return subtraction(a, b);
    }
}
function addition()
{
	return a + b;
}
function subtraction()
{
	return a - b;
}
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}