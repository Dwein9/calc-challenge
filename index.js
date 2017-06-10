$(document).ready(() => {
   onClick()
 })

 function onClick() {
   $("#submit").click(() => {
     $("#show-form").hide()
     $("#results").show()
     let name = (document.getElementById('name').value)
     let age = (document.getElementById('age').value)

     $("#results").append(`<div><h2>${name}</h2></div>`)
   })
 }

  // function getInfo() {
  // }
  //
  // function Results (name, age){
  //   this.name = name
  //   this.age = age
  // }
