import HeroDraw from "./heroDraw";
function Hero(props) {

    const boxContent = 'apply flex flex-wrap content-center box-content text-left ';
    const boxDraw = 'apply flex flex-wrap content-center box-content justify-self-end  ';
    const heroSection = 'bg-indigo-600 w-screen ';
    const heroGridTwoColumn = 'container max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 p-8 w-full  h-3/5 ';

        return (
            <section className={heroSection}>
                <div className={heroGridTwoColumn}>
                    <div className={boxContent}>
                        <h1 className="text-white text-4xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                        </h1>
                        <h2 className="text-indigo-50 text-xl">
                        Pellentesque viverra maximus bibendum.
                        </h2>
                    </div>
                   
                    <div className={boxDraw}>
                        <HeroDraw/>
                    </div>
                </div>
               
            </section>
        );
    
}
export default Hero;