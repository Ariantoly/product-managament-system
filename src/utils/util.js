function sum (numbers) {
  return numbers.reduce((total, num) => total += num, 0)
}

function convertPriceToRupiah (price) {
  return price ? `Rp${price}` : `Rp0`
}

export {
  sum,
  convertPriceToRupiah
}