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
        <section className="py-16 bg-gray-50">
            <div className="container max-w-screen-xl  mx-auto text-center pb-16 ">
                <h1 className="text-2xl text-gray-600 font-bold "> Já temos {recipes.length} receitas cadastradas em nossa plataforma!</h1>
            </div>
            <div className="container max-w-screen-xl mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    recipes.map(recipes => (
                        <div className="flex flex-col transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out" key={recipes.id} >
                            <div>
                                <img className="object-cover h-52 w-full rounded-t-md" src={urlPath + recipes.photo['url']}></img>
                            </div>
                            <div className=" rounded-b-md bg-green-600  p-4 text-green-50 text-center font-bold">
                                <h2>{recipes.RecipeName}</h2>
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