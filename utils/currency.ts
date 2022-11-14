const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  maximumFractionDigits: 0,
  currency: 'IDR',
});

export function formatCurrency(num: number) {
  return numberFormatter.format(num);
}
