export const getRandomAuthor = () => {
    const authors = ["Jane Austen", "Mark Twain", "Sarah Connor", "John Smith", "Albert Einstein"];
    return authors[Math.floor(Math.random() * authors.length)];
};