import { USD, BRL } from "./enums"

export default function(currency: string, price: number) {
  let encode_language = "en-GB"
  if (currency === USD)
    encode_language = "en-US"
  if (currency === BRL)
    encode_language = "pt-BR"
  const money = new Intl.NumberFormat(encode_language, {
    style: 'currency',
    currency: currency,
    roundingMode: 'ceil'
  })
  return money.format(price)
}
