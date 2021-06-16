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
            document.querySelector('.fixed').className = "fixed w-screen bg-indigo-600";
        } else {
            document.querySelector('.fixed').className = "fixed w-screen";
        }
    }
    render() {
        const navLinks = [
            {
                id: 1,
                title: 'Item menu 01',
                url: '#',
            },
            {
                id: 2,
                title: 'Item menu 02',
                url: '#',
            },
            {
                id: 3,
                title: 'Item menu 03',
                url: '#',
            },
            {
                id: 4,
                title: 'Item menu 04',
                url: '#',
            }
        ];
        
        const navbarContainer = 'container flex max-w-screen-xl mx-auto p-8  items-center';
        const logoContainer = 'container w-1/5 place-self-start text-left';
        const menuContainer = 'container w-4/5 place-self-end invisible md:visible';
        const menuList = 'flex float-right space-x-12  text-white ';
          
    return (
        <header className="fixed w-screen">
            <section className={navbarContainer}>
            <div className={logoContainer}>
                <h1 className="text-2xl text-white font-black ">MeuLogo.</h1>
            </div>
            <nav className={menuContainer}>
                <ul className={menuList}>
                    {navLinks.map(item => (
                        <li key={navLinks.id} className="inline-flex text-right"><a href={item.url}>{ item.title}</a></li>
                    ))}
                </ul>
                </nav>
            </section>
           
            
        </header>
    );
    }
 }

export default Navbar;