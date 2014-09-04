/**
dependencies: 
sylvester.js - matrix and vector API: http://sylvester.jcoglan.com/
dracula_graph.js and dracula_graffle.js - http://www.graphdracula.net/
jquery-1.4.2.min.js
Curry-1.0.1.js
common_control.js - contains the task generating and processing functions
*/

//initialize arrays//
var graphx = new Matrix;
var vertexnum;

function createGraph(vertexnum, linenum) {
    var linenum2 = linenum;
    graphx = Matrix.Zero(vertexnum, vertexnum);
    //start filling matrix until there are no lines left
	for (j = 1; j <= vertexnum; j++) {
        for (i = j + 1; i <= vertexnum; i++) {
            if (linenum2 > 0) {
                graphx.elements[i - 1][j - 1] = 1;
				graphx.elements[j - 1][i - 1] = 1;
                linenum2--;
            }
        }
    }
	//set matrix to be symmetric
    /*for (i = 1; i <= vertexnum; i++) {
        for (j = i + 1; j <= vertexnum; j++) {
            graphx.elements[i - 1][j - 1] = graphx.e(j, i);
        }
    }*/
    return graphx;
}
//returns the degrees of the graph nodes as an array
//parameters: graphx: an n x n dimension adjacency marix (array of arrays)
//output: array of the degrees of graph nodes
function getDegrees(graphx) {
    //get the vertexnumber
    var vertexnum = graphx.elements[0].length;
    var degrees = [];
    var partialsum = 0;
    for (j = 1; j <= vertexnum; j++) {
        partialsum = 0;
        for (i = 1; i <= vertexnum; i++) {
            partialsum = partialsum + graphx.elements[i - 1][j - 1];
        }
        degrees[j - 1] = partialsum;

    }
    return degrees;
}

/**
Create the graph with the adjacency Matrix.
*/
function createGraphForShow(adjacencyMatrix){
    var gra = new Graph();
	vertexnum = adjacencyMatrix.elements[0].length;
	for (i = 1; i <= vertexnum; i++) {
        gra.addNode(i);
		for (j = i + 1; j <= vertexnum; j++) {
            if (adjacencyMatrix.e(i, j) == 1) {
                gra.addEdge(i, j);
				
            }
        }
    }
	return gra;
}

function TaskSet() {
//set the number of questions
document.getElementById('maxpoints').innerHTML = numberOfQuestions;


//TASK1
    // create the first graph task
    var vertexnum = randomMinMax(4, 8);
    var maxlinenum = vertexnum * (vertexnum - 1) / 2;
	var linenum = randomMinMax(vertexnum, maxlinenum);
    var gr = createGraph(vertexnum, linenum);
    //log(gr);
    var degreestxt = getDegrees(gr).join('; ');
    //set the questions and good answers
    document.getElementById('vertex').innerHTML = vertexnum;
    document.getElementById('degrees').innerHTML = degreestxt;
    document.getElementById('quest1a').innerHTML = linenum;
    //adding the wrong answers
    document.getElementById('quest1b').innerHTML = linenum * 2;
    document.getElementById('quest1c').innerHTML = linenum - 1;
    document.getElementById('quest1d').innerHTML = linenum + 1;
//END TASK1

//TASK2	
    vertexnum = randomMinMax(4, 6);
    maxlinenum = vertexnum * (vertexnum - 1) / 2;
    linenum = randomMinMax(vertexnum, maxlinenum);
    //create the graph that solves the problem
	gr = createGraph(vertexnum, linenum);
    degreestxt = getDegrees(gr).join('; ');
    //set the task parameters
	document.getElementById('vertex2').innerHTML = vertexnum;
    document.getElementById('degrees2').innerHTML = degreestxt;
    
	//draw the solution and dummy graphs
	/*graph of g*/
    g1 = new Graph();
	
    g1 = createGraphForShow(gr);
	/*for (i = 1; i <= vertexnum; i++) {
        for (j = i + 1; j <= vertexnum; j++) {
            if (gr.e(i, j) == 1) {
                g1.addEdge(i, j);
            }
        }
    }*/
    /*graph of g2*/
    gr2 = createGraph(vertexnum, linenum + 1);
    g2 = new Graph();
    g2 = createGraphForShow(gr2);
	/*for (i = 1; i <= vertexnum; i++) {
        for (j = i + 1; j <= vertexnum; j++) {
            if (gr2.e(i, j) == 1) {
                g2.addEdge(i, j);
            }
        }
    }*/
    /*graph of g3*/
    gr3 = createGraph(vertexnum, linenum - 1);
    g3 = new Graph();
    g3 = createGraphForShow(gr3);
	/*for (i = 1; i <= vertexnum; i++) {
        for (j = i + 1; j <= vertexnum; j++) {
            if (gr3.e(i, j) == 1) {
                g3.addEdge(i, j);
            }
        }
    }*/
    /*graph of g4*/
    gr4 = createGraph(vertexnum + 1, linenum);
    g4 = new Graph();
    g4 = createGraphForShow(gr4);
    /*for (i = 1; i <= vertexnum + 1; i++) {
        for (j = i + 1; j <= vertexnum + 1; j++) {
            if (gr4.e(i, j) == 1) {
                g4.addEdge(i, j);
            }
        }
    }*/
    var renderer;
    var width = 350;
    var height = 200;
    /* layout the graph using the Symmetric layout implementation */
    var layouter = new Graph.Layout.Symmetric(g1);
    var layouter2 = new Graph.Layout.Symmetric(g2);
    var layouter3 = new Graph.Layout.Symmetric(g3);
    var layouter4 = new Graph.Layout.Symmetric(g4);
    /* draw the graph using the RaphaelJS draw implementation */
    renderer = new Graph.Renderer.Raphael('quest2a', g1, width, height);
    renderer = new Graph.Renderer.Raphael('quest2b', g2, width, height);
    renderer = new Graph.Renderer.Raphael('quest2c', g3, width, height);
    renderer = new Graph.Renderer.Raphael('quest2d', g4, width, height);
//END TASK 2

//TASK 3
	vertexnum = randomMinMax(5,8);
    
	//set task and good answers
	document.getElementById('vertex3').innerHTML = vertexnum;
    document.getElementById('quest3a').innerHTML = vertexnum*(vertexnum-1)/2;
    //adding the wrong answers
    document.getElementById('quest3b').innerHTML = vertexnum;
    document.getElementById('quest3c').innerHTML = vertexnum*2;
    document.getElementById('quest3d').innerHTML = vertexnum*(vertexnum-1);	
//END TASK3

//TASK4
	vertexnum = randomMinMax(5,8);
	maxlinenum = vertexnum * (vertexnum - 1) / 2;
    linenum = randomMinMax(vertexnum, vertexnum+2);	
	
	//create the graph
	gr = createGraph(vertexnum, linenum);
    g = new Graph();
    g = createGraphForShow(gr);
	//draw the graph
	var renderer;
    var width = 350;
    var height = 200;
	var layouter = new Graph.Layout.Symmetric(g);
	renderer = new Graph.Renderer.Raphael('image4', g, width, height);	
	//set task and good answers
	document.getElementById('vertex4').innerHTML = vertexnum;
	document.getElementById('quest4a').innerHTML = maxlinenum-linenum;
    //adding the wrong answers
    document.getElementById('quest4b').innerHTML = (maxlinenum-linenum)*2;
    document.getElementById('quest4c').innerHTML = maxlinenum-linenum+1;
    document.getElementById('quest4d').innerHTML = maxlinenum-linenum-1;	
	
//END TASK4

//TASK 5
	vertexnum  = randomMinMax(5,8);
	linenum  = randomMinMax(vertexnum-1, vertexnum+3);
	// vertexnum  = 6;
	// linenum  = 5;

	pointdegree = randomMinMax(3,vertexnum-1);
    //create the adjacency matrix
	var linenum2 = linenum;
	var graphx= new Matrix;
	graphx = Matrix.Zero(vertexnum, vertexnum);
    //set the first node to proper degree
	for (i = 1; i <= pointdegree; i++) {
		if (linenum2 > 0) {
			graphx.elements[i][0] = 1;
			linenum2--;
		}
	}
	
	//log(vertexnum);
	//set the remaining nodes to proper degree
	for (j = 2; j <= vertexnum; j++) {
        for (i = j + 1; i <= vertexnum; i++) {
            if (linenum2 > 0) {
                graphx.elements[i - 1][j - 1] = 1;
                linenum2--;
            }
        }
    }
	
	//create a symmetric matrix
    for (i = 1; i <= vertexnum; i++) {
        for (j = i + 1; j <= vertexnum; j++) {
            graphx.elements[i - 1][j - 1] = graphx.e(j, i);
        }
    }
    //draw the good graph
	g = new Graph();
    g = createGraphForShow(graphx);
	var renderer;
    var width = 350;
    var height = 200;
	var layouter = new Graph.Layout.Symmetric(g);
	renderer = new Graph.Renderer.Raphael('quest5a', g, width, height);	

	document.getElementById('vertex5').innerHTML = vertexnum;
	document.getElementById('line5').innerHTML = linenum;
	document.getElementById('degree5').innerHTML = pointdegree;
	
	//draw the remaining graph
    gr = createGraph(vertexnum + 1, linenum);
    g = new Graph();
    g = createGraphForShow(gr);	
	layouter = new Graph.Layout.Symmetric(g);
	renderer = new Graph.Renderer.Raphael('quest5b', g, width, height);	

    gr = createGraph(vertexnum, linenum+1);
    g = new Graph();
    g = createGraphForShow(gr);	
	layouter = new Graph.Layout.Symmetric(g);
	renderer = new Graph.Renderer.Raphael('quest5c', g, width, height);	

	gr = new Matrix.Zero(vertexnum, vertexnum);
	linenum2 = linenum;
	/*for (j = 1; j <= vertexnum; j++) {
        for (i = j + 1; i <= j + 2; i++) {
            if (i <= vertexnum){
				if (linenum2 > 0) {
					gr.elements[i - 1][j - 1] = 1;
					gr.elements[j - 1][i - 1] = 1;
					linenum2--;
				}
			}	
        }	
    }*/
	for (j = 1; j < vertexnum; j++) {
		if (linenum2 > 0) {
			gr.elements[j][j - 1] = 1;
			gr.elements[j - 1][j] = 1;
			linenum2--;
		}	
    }
	
	if (linenum2>0){
		gr.elements[0][vertexnum-1] = 1;
		gr.elements[vertexnum-1][0] = 1;
		linenum--;
	}
	
	for (j = 1; j < vertexnum-1; j++) {
		if (linenum2 > 0) {
			gr.elements[j+1][j - 1] = 1;
			gr.elements[j - 1][j+1] = 1;
			linenum2--;
		}	
	}
	g = createGraphForShow(gr);
	layouter = new Graph.Layout.Symmetric(g);
	renderer = new Graph.Renderer.Raphael('quest5d', g, width, height);
	
//END TASK5

//rearrange the answers
    rearrange("task1");
    rearrange("task2");
	rearrange("task3");
	rearrange("task4");
	rearrange("task5");

	}; // end function TaskSet()

function processqzGrzfok() {
    document.bgColor = '#ffff88'
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
        document.formzGrzfok.grade.value = "Legalább egy feladatot meg kell csinálnod!"
        document.formzGrzfok.score.value = "Titok!";
    } // end if

    else {
        document.formzGrzfok.score.value = goodguyszGrzfok;
        if (goodguyszGrzfok == numberOfQuestions) {
            document.formzGrzfok.grade.value = "Hurrá!"

            document.bgColor = "#3399FF"

        } else {
            document.formzGrzfok.grade.value = "Próbálkozz!"
        }
    } // end else
} // end function processqzGrzfok()

function killall() {
    //keep final scores from hanging around after reset clears form
    goodguys = 0;
    inhibitaa = 0;
    for (i = 0; i <= numberOfQuestions; i++) {
        stuff[i] = 0;
        answered[i] = 0
    };
    document.bgColor = "#AEFDA4";
} // end functionl killall()


