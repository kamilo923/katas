import { fruitCounter } from './for-each.fruit-counter'

describe('fruitCounter', () => {
  it('Should Return A Count Of All Repeated Elements', () => {
    const given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍎', '🍎', '🍐']

    const actual = fruitCounter(given)

    expect(actual).toEqual({
      '🍋': 3,
      '🍉': 1,
      '🍒': 1,
      '🍎': 2,
      '🍐': 1
    })
  })
})
