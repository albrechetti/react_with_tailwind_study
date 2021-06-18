import React, { Component } from 'react'
import { urlPath } from '../utils/urlPath';

class RecipeGalery extends Component {
    state = {
         recipes: []
    }
    componentDidMount() {

        this.loadRecipes();
    }

    loadRecipes = async () => {

        const recipeResponse = fetch(urlPath + '/recipes');
        const [recipes] = await Promise.all([recipeResponse]);
        const recipesJson = await recipes.json();
        this.setState({ recipes: recipesJson });
           
    }
    render() {
        const { recipes } = this.state;
    return (
        <section className=" bg-gray-50 px-8 ">
            <div className="container  max-w-screen-xl  mx-auto text-center py-16 ">
                <h1 className="text-2xl text-gray-600 font-bold"> Já temos {recipes.length} receitas cadastradas em nossa plataforma!</h1>
            </div>
            <div className="container max-w-screen-xl mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    recipes.map(recipes => (
                        <div className="flex flex-col transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out shadow-sm" key={recipes.id} >
                            <div>
                                <span className="bg-green-600 px-8 rounded-full absolute right-2 top-2 font-bold text-green-50">{recipes.category['categoryName']}</span>
                                <img className="object-cover h-52 w-full rounded-t-md" src={urlPath + recipes.photo['url']}></img>
                            </div>
                            <div className=" rounded-b-md  bg-gray-100 py-2 text-gray-700 text-center font-medium">
                                <h2 className="font-bold">{recipes.RecipeName}</h2>
                                <div className="grid grid-cols-3 text-gray-700 py-2">
                                    <span>{recipes.preparationTime}</span>
                                    <span>{recipes.portions}</span>
                                    <span>{recipes.difficulty}</span>
                                    
                                
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
          
        </section>
    );
   }
   
}
export default RecipeGalery;