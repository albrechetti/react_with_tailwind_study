import mockup from './mockup2.png'
function ContentSectionWith2Col() {

    return (
        <section className="flex w-screen bg-green-50  sm:h-screen md:h-2/3 content-center p-8 ">
            <div className="container max-w-screen-xl mx-auto grid md:grid-cols-2 content-center md:space-x-8 ">
                <div className="flex-col align-middle my-auto text-left">
                    <h1 className="text-2xl text-green-900 text-left mb-4">Lorem ipsum dolor sit amet</h1>
                    <p className="text-justify mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit sem, ac ullamcorper neque. Fusce risus neque, volutpat a nulla id, pulvinar molestie nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nec nibh eu ligula euismod porttitor vitae sed felis.  
                    </p>
                    <button type="button"  className="rounded-full py-3 px-9 bg-green-600 float-left  text-green-50"> Exemplo Botao</button>
                </div>
                <div className="box-content mb-8 md:mb-0">
                    <img className="max-w-md max-h-md content-end"src={mockup}></img>
                </div>
        
            </div>
        </section>

    );
    
}
export default ContentSectionWith2Col;