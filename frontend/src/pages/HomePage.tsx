import landingPage from "../assets/phone-display.png"
import appDownload from "../assets/app-download.png"

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-green-200 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tigh text-green-600">
                    Welcome to BiteBuddy.com!
                </h1>
                <span className="text-xl">
                    From Our Kitchen to Your Doorstep
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingPage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tight">
                        Order takeout or delivery from your favorite restaurants!
                    </span>
                    <span>
                        Download the BiteBuddy app to get started!
                    </span>
                    <img src={appDownload} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;