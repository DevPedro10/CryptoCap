// import PinkElipse from "../Elipses/PinkElipse"
// import PurpleElipse from "../Elipses/PurpleElipse"
import FeaturesCard from "../FeaturesCard/FeaturesCard"


const FeaturesSession = () => {
    return (
        <section className="bg-mainBackground h-max md:justify-center md:h-max mt-28 flex flex-col justify-around">
            {/* <PinkElipse /> */}
            {/* <PurpleElipse /> */}
            <div className="w-9/12 mx-auto">
                <div className="text-white text-center">
                    <h1 className="text-4xl">CryptoCap Amazing Features</h1>
                    <p className="text-zinc-400 mt-5">Explore sensational features to prepare your best investment in cryptocurrency</p>
                </div>
                <div className="flex 2xl:justify-between justify-center flex-wrap flex-1 shrink grow gap-5 mt-28">
                    <FeaturesCard
                        image="https://i.ibb.co/7zyT0pn/feature-image-1.png"
                        title="Secure"
                        description="Buy and sell popular digital currencies, keep track of them in the one place."
                    />

                    <FeaturesCard
                        image="https://i.ibb.co/LCftQb0/feature-image-2.png"
                        title="Protected Securely"
                        description="Buy and sell popular digital currencies, keep track of them in the one place."
                    />

                    <FeaturesCard
                        image="https://i.ibb.co/Dt7SBwn/feature-image-3.png"
                        title="Cryptocurrency Variety"
                        description="Supports a variety of the most popular digital currencies and always uptodate."
                    />

                    <FeaturesCard
                        image="https://i.ibb.co/YTtJGYT/feature-image-4.png"
                        title="Learn Best Practice"
                        description="Easy to know how to cryptocurrency works and friendly to newbie."
                    />


                </div>
            </div>
        </section>
    )
}

export default FeaturesSession