import { DrawTree } from './christmas-tree'

describe('DrawTree', () => {
  let rows: DrawTree
  rows = new DrawTree()

  it('Adding rows to create tree', () => {
    const actual = rows.christmasTree(1)
    const expected = '\n*\n***\n*****\n*******'
    expect(actual).toEqual(expected)
  })
})
