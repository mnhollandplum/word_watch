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
//change the html header to add in the word and count to the end
    $('.top-word h3').append(`"${word}" = ${wordCount} times`);
  }
})
