'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let sumFibs = fibs.reduce((sum, e) => sum += e)

let prodFibs = fibs.filter((e) => e > 0).reduce((prod, e) => prod * e)

let sumOdd = fibs.filter((e) => e % 2 === 1).reduce((sum, e) => sum += e)

let prodEven = fibs.filter((e) => e % 2 === 0 && e > 0).reduce((prod, e) => prod * e)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
