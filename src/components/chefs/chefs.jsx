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
            <section className="container max-w-screen-xl mx-auto p-8">
                 <h1 className="text-2xl text-center my-8">Chefs em destaque</h1>
                <div className="grid grid-cols-6 gap-4 mb-8">
                   
                    {
                        chefs.map(chefs => (
                            <div >
                                <img className="object-cover h-32 w-32  rounded-full"src={urlPath + chefs.avatar['url'] }></img>
                            </div>
                       ))
                    }
                </div>
            </section>
        )
    }


}
export default Chefs;