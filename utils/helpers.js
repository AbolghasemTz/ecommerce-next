export const percentTagDiscount = (originalPrice,discountPrice) => {
    const discount = originalPrice - discountPrice;

    const discountPercent = (discount/originalPrice) * 100
    return discountPercent.toFixed(1)
}