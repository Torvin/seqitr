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

  it('take', () => {
    expect(seqitr([1, 2, 3]).take(2).toArray()).toEqual([1, 2])
  })

  it('take 0', () => {
    expect(seqitr([1, 2, 3]).take(0).toArray()).toEqual([])
  })

  it('skip', () => {
    expect(seqitr([1, 2, 3]).skip(1).toArray()).toEqual([2, 3])
  })

  it('skip 0', () => {
    expect(seqitr([1, 2, 3]).skip(0).toArray()).toEqual([1, 2, 3])
  })

  it('skip all', () => {
    expect(seqitr([1, 2, 3]).skip(3).toArray()).toEqual([])
  })

  it('map witn index', () => {
    expect(seqitr([1, 2, 3]).map((item, index) => item * index).toArray()).toEqual([0, 2, 6])
  })
})
