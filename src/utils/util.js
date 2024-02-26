export function sum (numbers) {
  return numbers.reduce((total, num) => total += num, 0)
}

export function convertPriceToRupiah (price) {
  return price ? `Rp${price}` : `Rp0`
}