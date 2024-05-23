import { Button } from "@/components/ui/button";
import Header from "../Header/Header";
import Elipse from "../Elipse/Elipse";
import CryptoCard from "../CryptoCard/CryptoCard";
const Home = () => {
    return (
        <>
            <Header />
            <Elipse
                bgColor="bg-[#7000FF] "
                translateX="translate-x-[-50%]"
                translateY="translate-y-[60%]"
            />
            <Elipse
                bgColor="bg-[#FF00C7]"
                translateX="translate-x-[50%]"
                translateY="translate-y-[60%]"
            />
            <div className="text-white w-10/12 mx-auto mt-[-64px] flex flex-col justify-around h-max">
                <div className="mx-auto text-center mt-64 relative">
                    <h1 className="text-4xl font-bold">Start and Build Your Crypto Portfolio Here</h1>
                    <h2 className="mt-10 leading-8 text-zinc-200">Only at CryptoCap, you can build a good portfolio and learn <br /> best practices about cryptocurrency.</h2>
                    <Button className="mt-10 bg-customPrimaryColor text-white py-6 px-10">Get Started</Button>
                </div>

                <div className="2xl:mt-10px xl:h-auto lg:mt-28 md:mt-14">
                    <Elipse
                        bgColor="bg-[#7000FF] "
                        translateX="translate-x-[-%]"
                        translateY="translate-y-[100%]"
                    />
                    <h1 className="2xl:mb-5 text-xl font-bold 2xl:text-left sm:mb-16 text-center mt-16 md:mt-10">Market Trade</h1>
                    <div className="flex 2xl:justify-between justify-center flex-wrap flex-1 shrink grow gap-5">
                        <CryptoCard
                            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqBNFMT00wSrICBFmfW09WDroVoa695P5eZGyVUtWYw&s"}
                            tag="Bitcoin"
                            name="BTC"
                            price={"56,623.54"}
                            percentual={1.41}
                        />
                        <CryptoCard
                            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVyCtMa_rKwrl1y0hyWcqPda3eG0vssJBAX5xQznEPw&s"}
                            tag="Etherum"
                            name="ETH"
                            price={"4,267.90"}
                            percentual={2.22}
                        />
                        <CryptoCard
                            image={"https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png"}
                            tag="Binance"
                            name="BNB"
                            price={"587.74"}
                            percentual={0.82}
                        />
                        <CryptoCard
                            image={"https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png"}
                            tag="Tether"
                            name="USDT"
                            price={"0,9998"}
                            percentual={0.03}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}
export default Home;