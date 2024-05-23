import Elipse from "../Elipse/Elipse";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="h-max">
            <Elipse
                bgColor="bg-[#60FFE7]"
                translateX="translate-x-[-120%]"
                translateY="translate-y-[-50%]"
            />
            <hr className="border-white/[0.05] my-2" />
            <div className="my-16">
                <div className="my-16 text-center text-white">
                    <h1 className="my-5 text-4xl font-bold text-white">Crypto<span className="text-customPrimaryColor">Cap</span></h1>
                    <p>{year} CryptoCap. All Rights Reserved.</p>
                </div>
                <div className="block text-center text-white w-9/12 mx-auto text-xl items-center h-full md:flex justify-around shrink grow flex-wrap gap-10">
                    <div className="mb-16">

                        <h1 className="font-bold text-2xl mb-5">About Us</h1>
                        <ul className="flex flex-col gap-2">
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Carrers</li></a>
                            <a href="#"><li>Blog</li></a>
                            <a href="#"><li>Legal & Privacy</li></a>
                        </ul>
                    </div>
                    <div className="mb-16">
                        <h1 className="font-bold text-2xl mb-5">Services</h1>
                        <ul className="flex flex-col gap-2">
                            <a href="#"><li>Applications</li></a>
                            <a href="#"><li>Buy Cypto</li></a>
                            <a href="#"><li>Affilliate</li></a>
                            <a href="#"><li>Institucional Services</li></a>
                        </ul>
                    </div>
                    <div className="mb-16">
                        <h1 className="font-bold text-2xl mb-5">Learn</h1>
                        <ul className="flex flex-col gap-2">
                            <a href="#"><li>What is Cryptocurrency</li></a>
                            <a href="#"><li>Crypto Basic</li></a>
                            <a href="#"><li>Tips and Tutorials</li></a>
                            <a href="#"><li>Market Update</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;