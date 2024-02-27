import { describe, test, expect } from 'vitest'
import { sum, convertPriceToRupiah } from '/src/utils/util'

describe('util test', () => {
  test('sum', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(sum(numbers)).toBe(55)
  })

  test('sum empty list', () => {
    const numbers = []
    expect(sum(numbers)).toBe(0)
  })

  test('convertPriceToRupiah', () => {
    const price = 5000
    expect(convertPriceToRupiah(price)).toBe('Rp5000')
  })

  test('convertPriceToRupiah with string input', () => {
    const price = null
    expect(convertPriceToRupiah(price)).toBe('Rp0')
  })
})