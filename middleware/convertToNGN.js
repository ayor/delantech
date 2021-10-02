export const convert = (price) => {
    return new Intl.NumberFormat("en-us", {
        currency:"NGN",
        style:"currency"
    }).format(price);
}