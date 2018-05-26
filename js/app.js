//variables
const expense=document.querySelector('#add-expense');
const budtotal=document.querySelector('span#total');
const budleft=document.querySelector('span#left');

let budget,userbudget;
//classes

class Budget{
	constructor(budget){
		this.budget=budget;
		this.budgetleft=this.budget;
	}

	substractfrombudget(amount){
		return this.budgetleft -=amount;
	}
}

class Html{
	
	insertbudget(amount){
		budtotal.innerHTML=`${amount}`;
		budleft.innerHTML=`${amount}`;

	}

	printvalues(name,amount){
		const expenseslist=document.querySelector('#expenses ul');
		const li=document.createElement('li');
		li.classList="expenses";
		li.innerHTML=`${name} - ${amount}
		`;
		expenseslist.appendChild(li);
	}

	trackbudget(amount){
		const leftamount=budget.substractfrombudget(amount);
		console.log(leftamount);
		budleft.innerHTML=`${leftamount}`;
	}


}

const html = new Html();


//listeners
eventlisten();

function eventlisten(){

	document.addEventListener('DOMContentLoaded',function(){
		userbudget=prompt('what\s your weekly budget ?');
		if(userbudget===null || userbudget===''||userbudget==='0'){
			window.location.reload();
		}
		else{
			budget = new Budget(userbudget);
			html.insertbudget(budget.budget);
		}




	});
	expense.addEventListener('click',submitted);

}



function submitted(e){
	e.preventDefault();
	const expensename=document.querySelector('#expense').value;
	const expenseamout=document.querySelector('#amount').value;
	if(expensename===''||expenseamout===''){
		console.log('error');
	}
	else{
		html.printvalues(expensename,expenseamout);
		expense.reset();
		html.trackbudget(expenseamout);
	}
}