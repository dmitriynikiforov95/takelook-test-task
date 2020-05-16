const sortByPrice = (a, b) => a.price < b.price ? -1 : a.price > b.price ? 1 : 0;

export {
    sortByPrice,
}