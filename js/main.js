
console.log("connected")




 var pills= [
   	{
   		color: "red",
   		status:"You Die"
   	},
   
   	{
   		color: "blue",
   		status:"You Live"
   	}

 ];

 function myFunction() {

 	var inputValue = document.getElementById("myInput").value;
 	var newDiv= document.getElementById("newDiv");
 	var result= document.getElementById("result");

 	for(i=0; i<pills.length; i++){
 		if(inputValue ==pills[i].color){
 			newDiv.style.backgroundColor = pills[i].color;
 			result.innerText = pills[i].status;
 			break 
 		} else {
 			newDiv.style.backgroundColor ="grey";
 			result.innerText = "Seriously?";
 		}
 	}

 };
 


 
 

 