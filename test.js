var Result = require('./result.js')
var expect = require('chai').expect

describe('Calc-challenge', function() {
  describe('result', function() {
    var result
    beforeEach(function() {
      result = new Result ('David', 31, 'male', [])
    })

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

    it('should know if it has any conditions', function() {
      let resultWithConditions = new Result ('David', 31, 'male', ['allergies', 'sleepApnea', 'heartDisease'])
      expect(resultWithConditions.conditions).to.have.lengthOf(3);
    })

    it('should know its base cost', function() {
      expect(result.cost).equal(100);
    })

  })
})
