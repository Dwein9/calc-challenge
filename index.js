$(document).ready(() => {
   onClick()
 })


  function onClick() {
     $("#submit").click(() => {
       $("#show-form").hide()
       $("#results").show()
       let name = (document.getElementById('name').value)
       let age = (document.getElementById('age').value)
       let sex = $('input[name=gender]:checked').val()
       let conditions = $('input[name="conditions"]:checked').serialize().split('conditions=').join('').replace(/&/g, " ")

       $("#results").append(`<div>
         <h2>${name}</h2> <br/>
         <p>${age}</p>
         <p>${sex}</p>
         <p>${conditions}</p>
       </div>`)
     })
   }
