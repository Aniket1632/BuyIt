export const calculatePrice = (originalPrice, offerPercentage) => {
  const offerPrice = (originalPrice * offerPercentage) / 100;
  const latestPrice = originalPrice - offerPrice;
  return latestPrice;
};
