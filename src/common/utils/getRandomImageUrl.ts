export const  getRandomImageUrl=()=> {
    const imageCount = 5;
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `/book_shop/memory-book-${randomIndex}.png`;
}