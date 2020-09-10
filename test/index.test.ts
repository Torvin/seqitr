import seqitr from '../src'

describe('test', () => {
  it('filter', () => {
    expect(seqitr([1, 2, 3]).filter(x => x % 2 === 1).toArray()).toEqual([1, 3])
  })
})
