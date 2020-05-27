import numeral from 'numeral'

const dollarFilter = value => {
  if (!value) {
    return '$ 0'
  } else {
    return numeral(value.format('($ 0.00a'))
  }
}

export { dollarFilter }
