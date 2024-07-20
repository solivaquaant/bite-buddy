import hero from "../assets/hero.png"
import heroGif from "../assets/hero.gif"

const Hero = () => {
    return (
        <div>
            {/* <img
                    src={hero}
                className="w-faull max-h-[600x] object-cover" /> */}
            <img
                src={heroGif}
                className="w-faull max-h-[600x] object-cover" />
        </div>
    )
}

export default Hero;