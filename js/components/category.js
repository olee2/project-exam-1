// Returning the name of the category that correspondes to the id
export const categoryName = (id) => {
    const categories = JSON.parse(localStorage.getItem("categories"));
    return {name: categories.filter(category => category.id == id)[0].name, id};
}

// Returning all the posts with that category id
export const sortByCategory = (posts, id) => {
    try {
        const sorted = posts.filter(post => post.categories.includes(Number(id)));
        return sorted;
    } catch (error) {
        console.log(error)
    }
}