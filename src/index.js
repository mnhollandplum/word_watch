import $ from 'jquery'

$(document).ready(() => {
  // have fun!

  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => response.json())
  .then(top_word => console.log(top_word))
  .catch((error) => console.error({ error }))


})
