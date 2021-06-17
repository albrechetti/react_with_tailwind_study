function ContentSectionWith3Col() {

    return (
        <section className="flex w-screen bg-green-500  sm:h-screen md:h-96 p-8 ">
            <div className="container max-w-screen-xl mx-auto grid md:grid-cols-3 content-center md:space-x-8 ">
                <div className="box-content mb-8 md:mb-0">
                    <h1 className="text-2xl text-green-50 text-left mb-4">Lorem ipsum dolor sit amet</h1>
                    <p className="text-justify mb-4 text-indigo-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit sem, ac ullamcorper neque. Fusce risus neque, volutpat a nulla id, pulvinar molestie nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nec nibh eu ligula euismod porttitor vitae sed felis.  
                    </p>
                    <button type="button"  className="rounded-full py-3 px-9 bg-green-50 float-left  text-green-900"> Exemplo Botao</button>
                </div>
                <div className="box-content mb-8 md:mb-0">
                    <h1 className="text-2xl text-green-50 text-left mb-4">Lorem ipsum dolor sit amet</h1>
                    <p className="text-justify mb-4 text-indigo-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit sem, ac ullamcorper neque. Fusce risus neque, volutpat a nulla id, pulvinar molestie nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nec nibh eu ligula euismod porttitor vitae sed felis.  
                    </p>
                    <button type="button"  className="rounded-full py-3 px-9 bg-green-50 float-left  text-green-900"> Exemplo Botao</button>
                </div>
                <div className="box-content mb-8 md:mb-0">
                    <h1 className="text-2xl text-green-50 text-left mb-4">Lorem ipsum dolor sit amet</h1>
                    <p className="text-justify mb-4 text-green-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit sem, ac ullamcorper neque. Fusce risus neque, volutpat a nulla id, pulvinar molestie nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nec nibh eu ligula euismod porttitor vitae sed felis.  
                    </p>
                    <button type="button"  className="rounded-full py-3 px-9 bg-green-50 float-left  text-green-900"> Exemplo Botao</button>
                </div>
        
            </div>
        </section>

    );
    
}
export default ContentSectionWith3Col;