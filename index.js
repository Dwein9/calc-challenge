$(document).ready(() => {
   onSubmit()
   onReturn()
 })

  function onSubmit() {
    $("#submit").click(() => {
      $("#show-form").hide()
      $(".user-results").remove()
      $("#results").show()
      let name = (document.getElementById('name').value)
      let age = (document.getElementById('age').value)
      let sex = $('input[name=gender]:checked').val()
      let conditions = $('input[name="conditions"]:checked').serialize().split('conditions=').join('').replace(/&/g, " ").split(" ")

      result = new Result (name, age, sex, conditions)
      result.build()
    })
  }

  function onReturn() {
    $("#return").click(() => {
      $("#results").hide()
      $("#show-form").show()
    })
  }
