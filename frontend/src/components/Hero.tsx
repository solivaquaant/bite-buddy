import hero from "../assets/hero.png"

const Hero = () => {
    return (
        <div>
            <img
                    src={hero}
                className="w-faull max-h-[600x] object-cover" />
        </div>
    )
}

export default Hero;