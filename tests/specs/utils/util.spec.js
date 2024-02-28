import { describe, test, expect } from 'vitest'
import { sum, convertPriceToRupiah } from '../../../src/utils/util'

describe('test', () => {
  test('sum', () => {
    const numbers = [1, 2, 3, 4, 5]
    expect(sum(numbers)).toBe(15)
  })

  test('convertPriceToRupiah', () => {
    expect(convertPriceToRupiah(1000)).toBe('Rp1000')
  })
})