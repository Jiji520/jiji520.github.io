console.log ('Hello World!')

//event listner
//document object model 
//declaring a variable 

let myBlock = document.getElementById("myBlock") //get me an element that has an ID myBlock

console.log (myBlock) //to see if something is happening 

//I take the document element which I stored in the 'myBlock' variable
myBlock.onclick = () => { 
	console.log ('i click on the block')

}


let myVariable // var myVariable is the same thing 
myVariable = "hello" //data, type 

let myString
myString = "9" // strings (= words) 

let myNumber 
myNumber = 9 //number no quotation mark  

let myBool = true //boolean 

//life of a variable (state): 
	//1.declaring:let myVar 
	//2.initializing: myVar = "whatever"
	//3.using: console.log (myVar)

//conditionals: if something is in a particular state, do that, otherwise, do this 

if (2+2 == 4) { //equivalence, = means now if one is a value, the other one is also a value, == they are the same? 
	console.log ('math works') 

}

if (myBool = true) { //do this - you can just write, if (myBool) - true, if (!myBool)- false 
	console.log ('math works')	
}else { // do that 
	console.log ('the condition wasnt true')
}

//event listeners 

let myBlock = document.getElementById('myFirstBlock')  
console.log (myBlock) 


let myNumberOfClicks = 0

myBlock.onclick = () => { //action ==function =>something moving 
myNumberOfClicks += 1 // shortcut for  "= myNumberOfClicks + 1" : ++ means increase by 1 

if(myNumberOfClicks ==1){
	console.log ('you have clicked: '+myNumberOfClicks+' time') 
}else {
	console.log ('you have clicked:' +myNumberOfClicks+' times')
}


myBlock.onclick = () => { 
	myBlock..style.height = '0px' 

	}

















