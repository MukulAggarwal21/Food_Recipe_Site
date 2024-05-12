import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeid) {
   try {

      const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeid}`);
      const data = await apiResponse.json();

      return data;

   } catch (error) {
      throw new Error(error)
   }
}


export default async function RecipeDetails({ params }) {

   const getRecipeDetails = await fetchRecipeDetails(params.details);

   return (
      <div>
         <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
      </div>
   )

}