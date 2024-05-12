import RecipeList from "@/components/recipe-list";

async function fetchListofRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();

        return (
            data?.recipes
        )


    } catch (error) {
        throw new Error(error)
    }
}


export default async function Recipies() {
const recipeList = await fetchListofRecipes();



    return <RecipeList recipeList={recipeList}/>
}