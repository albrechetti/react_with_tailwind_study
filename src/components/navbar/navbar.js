import React, { Component } from 'react'

class Navbar extends Component{

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            document.querySelector('.fixed').className = "transition duration-500 ease-in-out fixed w-screen bg-gray-50 text-green-600  z-50";
            document.querySelector('#btn').className = " flex flex-shrink-0 text-center font-bold bg-green-600 px-8 rounded-full py-4 text-green-50";
            
        } else {
            document.querySelector('.fixed').className = "transition duration-500 ease-in-out fixed w-screen text-green-50  z-50";
            document.querySelector('#btn').className = " flex flex-shrink-0 text-center font-bold bg-green-50 px-8 rounded-full py-4 text-green-600";
            
        }
    }
    render() {
        const navLinks = [
         
            {
                id: 1,
                title: 'Conheça o app',
                url: '#',
            },
            {
                id: 2,
                title: 'Principais Receitas',
                url: '#',
            },
            {
                id: 3,
                title: 'Sobre nós',
                url: '#',
            }
        ];
        
        const navbarContainer = 'container flex max-w-screen-xl mx-auto p-8  items-center';
        const logoContainer = 'container flex flex-wrap text-left';
        const menuContainer = 'container invisible md:visible ';
        const menuList = 'flex-grow  space-x-12 mx-auto  ';
          
    return (
        <header className="fixed w-screen text-green-50 z-50">
            <section className={navbarContainer}>
            <div className={logoContainer}>
                <h1 className="text-2xl  font-black ">TiaVegana.</h1>
            </div>
            <nav className={menuContainer}>
                <ul className={menuList}>
                    {navLinks.map(item => (
                        <li key={navLinks.id} className="inline-flex text-right"><a href={item.url}>{ item.title}</a></li>
                    ))}
                        
                    </ul>
                   
                    
                </nav>
                <button id="btn" className="flex flex-shrink-0 text-center font-bold  bg-green-50 px-8 rounded-full py-4 text-green-600 " type="button"> Downlaod App </button>
            </section>
           
            
        </header>
    );
    }
 }

export default Navbar;