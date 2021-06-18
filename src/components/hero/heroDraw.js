import mockup from './mockup.png'
export const HeroDraw = () => {
    const heroDrawClass = 'max-w-md max-h-md content-end';
    return (
        <img className={heroDrawClass} src={mockup}></img>
        );
}
