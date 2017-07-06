var Result = require('./result.js')
var expect = require('chai').expect

describe('Result', function() {
  var result
  beforeEach(function() {
    result = new Result ('David', 31, 'male', [])
  })

  describe('base cases', function() {
    it('should know its name', function() {
      expect(result.name).equal('David')
    })

    it('should know its age', function() {
      expect(result.age).equal(31)
    })

    it('should know its sex', function() {
      expect(result.sex).equal('male')
    })

    it('should know if it does not have any conditions', function() {
      expect(result.conditions).to.be.empty;
    })

    it('should know its base cost', function() {
      expect(result.cost).equal(100);
    })
  })

  describe('special cases', function() {

    it('should know if it has any conditions', function() {
      let resultWithConditions = new Result ('David', 31, 'male', ['allergies', 'sleepApnea', 'heartDisease'])
      expect(resultWithConditions.conditions).to.have.lengthOf(3);
    })

    it('should adjust the cost by 20 for every five years over the age of 18', function() {
      result.ageCost()
      expect(result.cost).equal(140);
    })

    it('should increase cost by 1% for allergies', function() {
      let resultWithAllergies = new Result ('David', 31, 'male', ['allergies'])
      resultWithAllergies.conditionCost()
      expect(resultWithAllergies.cost).equal(101);
    })

    it('should increase cost by 6% for sleep apnea', function() {
      let resultWithSleepApnea = new Result ('David', 31, 'male', ['sleepApnea'])
      resultWithSleepApnea.conditionCost()
      expect(resultWithSleepApnea.cost).equal(106);
    })

    it('should increase cost by 17% for heart disease', function() {
      let resultWithHeartDisease = new Result ('David', 31, 'male', ['heartDisease'])
      resultWithHeartDisease.conditionCost()
      expect(resultWithHeartDisease.cost).equal(117);
    })

    it('should not adjust the cost for males', function() {
      result.sexCost()
      expect(result.cost).equal(100);
    })

    it('should adjust the final cost for females', function() {
      let resultFemale = new Result ('Rachel', 29, 'female', [])
      resultFemale.sexCost()
      expect(resultFemale.cost).equal(88);
    })

    it('should adjust the final cost for females with conditions', function() {
      let resultFemaleConditions = new Result ('Rachel', 18, 'female', ['allergies'])
      resultFemaleConditions.conditionCost()
      resultFemaleConditions.sexCost()
      expect(resultFemaleConditions.cost).equal(89);
    })

  })
})
