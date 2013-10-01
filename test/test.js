var assert = require("assert")
var sortAs = require("../sortas")

describe('Sortas', function(){

  it('should exist as a module', function(){
    assert(sortAs)
  })

  describe('#text', function(){

    it('should exist as a method', function(){
      assert(sortAs.text)
    })

    it('should sort string items alphabetically', function(){
      var unsortedList = ["Bobby", "Donovan", "Carl", "Andy"]
      var sortedList = ["Andy", "Bobby", "Carl", "Donovan"]
      
      assert.deepEqual(unsortedList.sort(sortAs.text), sortedList)
    })

    it('should ignore case when sorting', function(){
      var unsortedList = ["ZZ Top", "abc", "aCb", "BBc"]
      var sortedList = ["abc", "aCb", "BBc", "ZZ Top"]

      assert.deepEqual(unsortedList.sort(sortAs.text), sortedList)
    })

    it('should sort numbers like a human', function(){
      var unsortedList = [17.8, 11, 4, 2, 20, 7, 1.111]
      var sortedList = [1.111, 2, 4, 7, 11, 17.8, 20]

      assert.deepEqual(unsortedList.sort(sortAs.text), sortedList)
    })

    it('should sort strings with numbers in them like a human', function(){
      var unsortedList = ["foo 17.8", "foo 11", "bar4", "bar25", "1 foo", "bar 20", "bar7 baz", "foo 1.111", "bar25A"]
      var sortedList = ["1 foo", "bar 20", "bar4",  "bar7 baz", "bar25", "bar25A", "foo 1.111", "foo 11", "foo 17.8"]

      assert.deepEqual(unsortedList.sort(sortAs.text), sortedList)
    })

    it('should sort `null`, `undefined`, `""`, `NaN` and Object values before String and Number values', function(){
      var unsortedList = [4, 3, 6, {foo:'bar'}, 1, undefined, 2, NaN, null, 5]
      var sortedList = unsortedList.sort(sortAs.text)

      assert.equal(sortedList[4], 1)
      assert.equal(sortedList[5], 2)
      assert.equal(sortedList[6], 3)
      assert.equal(sortedList[7], 4)
      assert.equal(sortedList[8], 5)
      assert.equal(sortedList[9], 6)
      assert.equal(sortedList.length, unsortedList.length)
    })

  })
})