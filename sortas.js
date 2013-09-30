(function() { "use strict";

  // converts values to lowercase string values if they are sortable types
  function toSortableString(x) {
    return (x || x === 0) && x !== 'object' ? x.toString().toLowerCase() : null
  }

  window.sortAs = {

    text: function(a, b) {
      a = toSortableString(a)
      b = toSortableString(b)

      if (a === b) return 0

      var a, aCode, aNum
      var b, bCode, bNum
      var codesMatch
      var compareNumbers
      var startIndex
      var i = 0

      // if a and b are strings or numbers, 
      // find and compare the differences only
      if (a && b) {

        while (1) {
          aCode = a.charCodeAt(i)
          bCode = b.charCodeAt(i)
          codesMatch = aCode === bCode

          // if both are numbers, start tracking
          if (aCode <= 57 && aCode >= 48 && bCode <= 57 && bCode >= 48) {
            if (!compareNumbers) startIndex = i
            compareNumbers = true
          }

          // if neither are numbers, stop tracking
          else if (codesMatch) {
            startIndex = i
            compareNumbers = false
          }

          // if not the same, break
          if (!codesMatch) break

          i++
        }

        a = a.substring(startIndex) || null
        b = b.substring(startIndex) || null
      }

      // compare strings
      if (a === b) return 0
      if (!a) return -1
      if (!b) return 1
      if (!compareNumbers) return a < b ? -1 : 1

      // compare numbers
      aNum = parseInt(a)
      bNum = parseInt(b)
      return aNum < bNum ? -1 : 1

    }

  }

})()
