/**
dependencies: 
none
*/


function TaskSet() {
//set the number of questions
document.getElementById('maxpoints').innerHTML = numberOfQuestions;

//TASK1
var a1 = randomMinMaxNotZero(-10, 10);
var d = randomMinMaxNotZero(-5, 6);
var n = randomMinMax(15, 19);
document.getElementById('task6_a1').innerHTML = a1;
document.getElementById('task6_d').innerHTML  = d;
document.getElementById('task6_n').innerHTML = n;
document.getElementById('answer6a_txt').innerHTML = (a1 + (n-1)*d);
document.getElementById('answer6b_txt').innerHTML = (a1 + n + d);
document.getElementById('answer6c_txt').innerHTML = (a1 + n*d);
document.getElementById('answer6d_txt').innerHTML = (n*d);


//END TASK1

//TASK2	
 
//END TASK 2

//TASK 3
	
//END TASK3

//TASK4
	
//END TASK4

//TASK 5
	
//END TASK5

//rearrange the answers
    rearrange("answers_6");
    rearrange("answers_7");
	rearrange("answers_8");
	rearrange("answers_9");
	rearrange("answers_10");

}; // end function TaskSet()