import $ from 'jquery'

$(document).ready(() => {
  // have fun!

//get data from api
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
//turn it in to json
  .then(response => response.json())
//pass json to display variable
  .then(top_word => displayWord(top_word))
//error out
  .catch((error) => console.error({ error }))

//create display variable, pass in json
  const displayWord = (top_word) => {
//get the word
  const word = Object.keys(top_word.word)[0];
// get the count of how many times it was searched
  const wordCount = Object.values(top_word.word)[0];
//append the html header to add in the word and count to the end. Empty it out to update when word is added via input
    $('.top-word h3').empty().append(`Top word from Word Watch API: "${word}" = ${wordCount} times`);
  }

//target break down button
$( "#breakdown-button" ).click(function() {
//assign user input to variable
    var input = $('#text-input').val();
//post request
      fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
        method: "POST",
        headers: {
           "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ word: { value: input}})
      })
//fetch the updated api to display updated word count if applicable
      .then(response => response.json())
      .then(json => {fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
      .then(response => response.json())
  //rerun display word
      .then(top_word => displayWord(top_word))
      .catch(error => console.log({ error }));
        })
      .catch(error => console.log({ error }));
  });

  })
