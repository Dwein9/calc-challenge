module.exports = {

  ageCost: function(age){
    return ((Math.floor((age - 18) / 5 )) * 20) + 100
  },

  conditionCost: function(conditions, quote) {
    var newQuote = quote;

    if (conditions.includes("Allergies")) {
      newQuote *= 1.01
    }

    if (conditions.includes("Sleep Apnea")) {
      newQuote *= 1.06
    }

    if (conditions.includes("Heart Disease")) {
      newQuote *= 1.17
    }
     return newQuote
   },

  femaleDiscount: function(sex){
    if (sex === "female") { return -12}
    return 0
  }
}
