import React, { Component } from 'react'
import { urlPath } from '../utils/urlPath';
import { ClockIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/solid';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { Button } from '../button';


export class RecipeGalery extends Component {

    state = {
        recipes: [],
        allRecipes: [],
        recipePerPage: 6,
    }
    componentDidMount() {

        this.loadRecipes();
    }

    loadRecipes = async () => {
        const { recipePerPage } = this.state;
        const recipeResponse = fetch(urlPath + '/recipes');
        const [recipes] = await Promise.all([recipeResponse]);
        const recipesJson = await recipes.json();
        this.setState({
            recipes: recipesJson.slice(0, recipePerPage),
            allRecipes: recipesJson,
        });
           
    }
    loadMoreRecipes = () => {
       
      alert('alo')

        
    }

    render() {
        const { recipes } = this.state;
        const { allRecipes } = this.state;

    return (
        <section className=" bg-gray-50 px-8 ">
            <div className="container  max-w-screen-xl  mx-auto text-center py-16 ">
                <h1 className="text-2xl text-gray-600 font-bold"> Já temos {allRecipes.length} receitas cadastradas em nossa plataforma!</h1>
            </div>
            <div className="container max-w-screen-xl mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    recipes.map(recipes => (
                        <div className="flex flex-col transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out shadow-sm" key={recipes.id} >
                            <div>
                                <span className="bg-yellow-400 px-8 rounded-full absolute right-2 top-2 font-bold text-yellow-900">{recipes.category['categoryName']}</span>
                                <img className="object-cover h-52 w-full rounded-t-md" src={urlPath + recipes.photo['url']}></img>
                            </div>
                            <div className=" rounded-b-md  bg-green-600 py-2 text-green-50 text-center font-medium">
                                <h2 className="font-bold text-lg">{recipes.RecipeName}</h2>
                                <div className="grid grid-cols-3 text-green-50 py-4 text-sm">
                                    
                                    <span className="inline-flex px-4"><ClockIcon className="text-yellow-400 w-6 mr-2 "/>{recipes.preparationTime}</span>
                                    <span className="inline-flex px-4"><UserGroupIcon className="text-yellow-400 w-6 mr-2"/>{recipes.portions}</span>
                                    <span className="inline-flex px-4"><InformationCircleIcon className="text-yellow-400 w-6 mr-2"/>{recipes.difficulty}</span>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className="container  max-w-screen-xl  mx-auto text-center py-16 ">
                <Button text="Ver mais" onClick={this.loadMoreRecipes}/>
            </div>
           
            
          
        </section>
    );
   }
   
}
