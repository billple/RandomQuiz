var questionAnswers = [
  ['What kind of bird is pink and can\'t fly?', 'FLAMINGO'],
  ['What function removes an item from an array?', 'POP'],
  ['What programming language styles web pages?', 'CSS']
];
var correctQ = [];
var incorrectQ = [];
var correct = 0;
var answers;
var question;
var response;
var html;


//functions for Print and Building a list
function print(message) {
  //Element is called output
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
function buildList(arr){
  var listArr = '<ol>';
  for(var j = 0; j < arr.length; j += 1){
    listArr += '<li>' + arr[j] + '</li>';
  }
  listArr += '</ol>';
  return listArr;
}

//Keep track of correct answers

for(var i = 0; i < questionAnswers.length; i += 1){
   question = questionAnswers[i][0];
   answer = questionAnswers[i][1];
   response = prompt(question);
   if(response.toUpperCase() === answer){
     correct += 1;
     correctQ.push(question);
   }else{
     incorrectQ.push(question);
   }
}



//List all the questions answered right
html = '<p>You got '+ correct + ' question(s) correct</p>';
html += '<h2>You got these questions correct:</h2> ';
html += buildList(correctQ);
html += '<h2>You got these questions incorrect:</h2>';
html += buildList(incorrectQ);
print(html);


