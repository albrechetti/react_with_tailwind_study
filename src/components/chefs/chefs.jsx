import React, { Component } from 'react'
import { urlPath } from '../utils/urlPath';

class Chefs extends Component {
    
    state = {
        chefs: []
    }

    componentDidMount() {
        this.loadChefs();
    }

    loadChefs = async () => {
        const chefResponse = fetch(urlPath + '/chefs');
        const [chefs] = await Promise.all([chefResponse]);
        const chefsJson = await chefs.json();
        this.setState({chefs: chefsJson});
    }
    render() {
        const {chefs} = this.state;
        return (
            <section className="bg-gray-50">
                <div className="container max-w-screen-xl mx-auto py-16 px-8">
                    <h1 className="text-2xl text-gray-600 font-bold text-center mb-8">Chefs em destaque</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
                    
                        {
                            chefs.map(chefs => (
                                <div >
                                    <img className="object-cover h-40 w-40  rounded-full"src={urlPath + chefs.avatar['url'] }></img>
                                </div>
                        ))
                        }
                    </div>
                </div>
                
            </section>
        )
    }


}
export default Chefs;