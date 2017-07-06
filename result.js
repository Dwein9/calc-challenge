class Result {
  constructor (name, age, sex, conditions){
      this.name = name
      this.age = age
      this.sex = sex
      this.conditions = conditions
      this.cost = 100
  }

  ageCost() {
    this.age >= 18 ? this.cost +=  ((Math.floor((this.age - 18) / 5 )) * 20) : alert('Invalid Age. Must be over 18');
  }

  sexCost() {
    this.sex === "female" ? this.cost -= 12 : 0
  }

  conditionCost() {
     if (this.conditions.includes("allergies")) { this.cost *= 1.01 }
     if (this.conditions.includes("sleepApnea")) { this.cost *= 1.06 }
     if (this.conditions.includes("heartDisease")) { this.cost *= 1.17 }
  }

  build (){
    this.ageCost()
    this.conditionCost()
    this.sexCost()

    $("#results").append(`<div class="user-results">
      <h2>Thanks for you submission ${this.name}.</h2> <br/>

      <p>After considering your age, gender, and existing conditions we can offer annual policy of $${this.cost.toFixed(2)}.</p> <br/>

    </div>`)
  }

}

module.exports = Result;
