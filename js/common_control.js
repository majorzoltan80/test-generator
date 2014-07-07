var numberOfQuestions = 5;
// maximum number of questions
var stuff = new Array(numberOfQuestions)
var answered = new Array(numberOfQuestions)
// processing inhibitor for guessers
for (var i = 0; i <= numberOfQuestions; i++) {
    stuff[i] = 0;
    answered[i] = 0
}
//initialize arrays//
/**
Creates a random number between min and max, max bound not included
*/
function randomMinMax(min, max){
	return Math.floor((Math.random() * (max-min)) + min);;
}


function randomMinMaxNotZero(min, max){
    var number = randomMinMax(min, max);
    if (number==0){number++};
    return number;
}


/**
Take the childs of the element identified by the ID. And reorder them randomly. The last child always stays the same.
*/
function rearrange(id) {
    //get the parent elemnt by its id
    var parent = document.getElementById(id);
    //save the child elements to Array 'a'
    var a = [];
    for (i = 0; i < 5; i++) {
        a[i] = parent.children[i];
        //console.log(a[i]);
    }
    //remove childs
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    //add childs again in random order
    parent.appendChild(a[0]);
    for (i = 1; i < 4; i++) {
        if (Math.random() < 0.5) {
            parent.appendChild(a[i]);
        } else {
            parent.insertBefore(a[i], parent.firstChild);
        }
    }
    parent.appendChild(a[4]);
}

function processAnswers() {
    document.documentElement.style.backgroundColor = '#008040'
	var goodguyszGrzfok = 0;
    // used to calculate score
    var inhibitzGrzfok = 0;
    // used to prevent processing of partially completed forms

    for (var i = 1; i <= numberOfQuestions; i++) {
        goodguyszGrzfok = goodguyszGrzfok + stuff[i];
        inhibitzGrzfok = inhibitzGrzfok + answered[i];
    } // end for

    // Prevent display of score if too few questions completed
    if (inhibitzGrzfok < 0) {
        document.formAnswers.grade.value = "Legalább egy feladatot meg kell csinálnod!"
        document.formAnswers.score.value = "Titok!";
    } // end if

    else {
        document.formAnswers.score.value = goodguyszGrzfok;
        if (goodguyszGrzfok == numberOfQuestions) {
            document.formAnswers.grade.value = "Hurrá!"

            document.documentElement.style.backgroundColor = "#3399FF"

        } else {
            document.formAnswers.grade.value = "Próbálkozz!"
        }
    } // end else
} // end function processAnswers()


function killall() {
    //keep final scores from hanging around after reset clears form
    goodguys = 0;
    inhibitaa = 0;
    for (i = 0; i <= numberOfQuestions; i++) {
        stuff[i] = 0;
        answered[i] = 0
    };
    document.documentElement.style.backgroundColor = "#008040";
} // end functionl killall()
