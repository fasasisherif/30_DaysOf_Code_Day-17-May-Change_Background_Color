//THIS ASSIGNS A CLASSNAME TO VARIABLE 'BUTTON'
var button = document.getElementsByClassName('my_click_button');

//CODE FOR RANDOM BACKGROUND COLOUR ON CLICK BEGINS

//THIS FUNCTION CREATES A RANDOM HEXADECIMAL COLOR CODE
function myfunc(){
				
//WE USED THIS BCOS THE HEXADECIMAL VALUES RANGE FROM '0' TO 'F'
var values = "0123456789ABCDEF"

//HEXADECIMAL CODE BEGINS WITH '#'' SO WE USE THIS
var hexacode = "#";				
	
//WE CREATE A FOR LOOP TO ITERATE AGAINST EACH NUMBER AND LETTER IN THE STRING 'VALUES'

//WE USE i<6 BCOS 'i' IS STARTING FROM ZERO

//SO IT EVENTUALLY ITERATES SIX TIMES		
for (var i = 0; i < 6; i++){
				 hexacode += values[Math.floor(Math.random()*16)]
				}

//Math.floor PREVENTS US FROM GETTING FLOATS

//IT ROUNDS THE NUMBER UP

/*Math.random HELPS US TO PICK A NUMBER AT RANDOM BETWEEN '0' TO '16'. '0' INCLUSIVE AND 
'16' EXCLUSIVE */


				
var body = document.getElementsByTagName('body');

body[0].style.backgroundColor = hexacode;	
			
var colourcod = document.getElementsByClassName('colourcode');

//THIS INPUTS THE RESULT 'hexacode' INTO THE HTML
button[0].innerHTML="REGENERATE HEX COLOUR";
colourcod[0].innerHTML = hexacode;
}

button[0].addEventListener("click",myfunc);

//CODE FOR RANDOM BACKGROUND COLOUR ON CLICK ENDS




//CODE FOR RANDOM BUTTON COLOUR ON CLICK BEGINS

function myfunc2(){
var values = "0123456789ABCDEF"
var hexacode2 = "#";				

//THIS USES THE SAME METHOD EXPLAINED EARLIER				
for (var i = 0; i < 6; i++){
				 hexacode2 += values[Math.floor(Math.random()*16)]
				}	

//THIS STYLES THE BUTTON
button[0].style.backgroundColor = hexacode2;		
			
var colourcode2 = document.getElementsByClassName('colourcode2');

//THIS INPUTS THE RESULT 'hexacode2' INTO THE HTML
colourcode2[0].innerHTML = hexacode2;
}

//WE USE 'addEventListener' TO CREATE A CLICK FUNCTION
button[0].addEventListener("click",myfunc2);
myfunc2();

//CODE FOR RANDOM BUTTON COLOUR ON CLICK ENDS
