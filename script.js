//your code here
class OutOfRangeError extends Error{
	constructor(){
		super("Expression should only consist of integers and +-/* characters");
		this.name="OutOfRangeError";
	}
}

class InvalidExprError extends Error{
	constructor(){
		super("Expression should not have an invalid combination of expression");
		this.name="InvalidExprError";
	}
}

function evalString(expression){
	try{
		if(expression.match(/[^0-9+\-*/]/)){
			throw new OutOfRangeError();
		}
		if(expression.match(/\+{2,}|\-{2,}|\*{2,}|\/{2,}/)){
			throw new InvalidExprError();
		}
		if(expression.match(/^[\/*+]/)){
			throw new SyntaxError("Expression should not start with invalid operator");
		}
		if(expression.match(/[+\-*/]$/)){
			throw new SyntaxError("Expression should not end with invalid operator");
		}
		let result=eval(expression);
		return result;
	}catch(error){
		console.error(error);
		return null;
	}
}
