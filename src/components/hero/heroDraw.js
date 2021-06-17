import mockup from './mockup.png'
const HeroDraw = () => {
    const heroDrawClass = 'max-w-md max-h-md content-end';
    return (
        <img className={heroDrawClass} src={mockup}></img>
        );
}
export default HeroDraw;