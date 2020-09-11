import seqitr, { range } from '../src'

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

  it('filter with type guard', () => {
    expect(seqitr([1, undefined, 3]).filter(isDefined).map(x => x + 1).toArray()).toEqual([2, 4])
  })

  it('pass nested seqitr', () => {
    expect(seqitr([1, 3]).flatMap(x => seqitr([x, x + 1])).toArray()).toEqual([1, 2, 3, 4])
  })

  it('range', () => {
    expect(range(3, 2).toArray()).toEqual([3, 4])
  })

  it('range without start', () => {
    expect(range(3).toArray()).toEqual([0, 1, 2])
  })
})

function isDefined<T>(arg: T): arg is NonNullable<T> {
  return arg !== undefined && arg !== null
}
