import seqitr from '../src'

describe('test', () => {
  it('filter', () => {
    expect(seqitr([1, 2, 3]).filter(x => x % 2 === 1).toArray()).toEqual([1, 3])
  })

  it('first without condition', () => {
    expect(seqitr([1, 2, 3]).first()).toEqual(1)
  })

  it('first with condition', () => {
    expect(seqitr([1, 2, 3]).first(x => x % 2 === 0)).toEqual(2)
  })
})
