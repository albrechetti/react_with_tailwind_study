import { HeroDraw } from "./heroDraw";


function Hero(props) {

    const boxContent = 'flex-col align-middle my-auto text-left ';
    const boxDraw = 'flex flex-wrap content-center box-content justify-self-end  ';
    const heroSection = 'bg-gradient-to-tr from-green-500 to-green-700 w-screen  h-screen ';
    const heroGridTwoColumn = 'container max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 p-8 w-full  h-screen ';
    const mainTitle = 'text-green-50 text-4xl font-black mb-4'
    const subTitle = 'text-green-50 text-xl mb-8'
    const callToActionBtn = 'rounded-full py-3 px-6 bg-green-50 text-green-900 font-bold'

        return (
            <section className={heroSection}>
                <div className={heroGridTwoColumn}>
                    <div className={boxContent}>
                        <h1 className={mainTitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                        </h1>
                        <h2 className={subTitle}>
                        Pellentesque viverra maximus bibendum.
                        </h2>
                        <button type="button" className={callToActionBtn}>Faça o download já!</button>
                    </div>
                    <div className={boxDraw}>
                        <HeroDraw />
                    </div>
                </div>    
            </section>
        );
    
}
export default Hero;