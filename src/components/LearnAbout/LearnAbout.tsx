import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import InfoCard from "./InfoCard";

const LearnAbout = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="h-max w-9/12 mx-auto my-36">
            <div className="text-center mb-16">
                <h1 className="text-white text-4xl">Learn About Cryptocurrency</h1>
                <h2 className="text-zinc-400 mt-3">Learn all about cryptocurrency to start investing</h2>
            </div>

            <div>
                {/* <div className="flex justify-between flex-1 shrink grow flex-wrap">
                    <div className="w-[680px] h-[410px] relative rounded-4xl" data-aos="fade-right">
                        <figure className="" >
                            <img src="https://i.ibb.co/Y3wsJNx/unsplash-8i-IUDn-Rq87o.png" className="w-[680px] h-[365px]" alt="" />
                        </figure>
                        <div className="absolute text-white bottom-16 px-3 ml-2">
                            <h1 className="text-3xl font-bold">All about Investing in NFTs and related risks</h1>
                            <div className="bg-zinc-500/40 w-max p-1 mt-3 text-white uppercase text-xs rounded-sm">Crypto Basic</div>
                        </div>
                    </div>

                    <InfoCard
                        tag="Crypto Basic"
                        title="Can crypto really replace your bank account?"
                        description="Cryptocurrencies are basically digital assets. It is secured by cryptography..."
                        image="https://i.ibb.co/sCN6p7v/image-2.png"
                    />
                    <InfoCard
                        tag="Crypto Basic"
                        title="What is cryptocurrency? all you need to know"
                        description="From direct deposit to earning yield, key ways crypto can help you take control.."
                        image="https://i.ibb.co/K2CbQt1/image-3.png"
                    />

                </div> */}

            </div>
            <div className="flex justify-around shrink grow flex-wrap gap-10">
                <InfoCard
                    tag="TIPS & TRICKS"
                    title="How to setup crypto wallet in your account"
                    description="A crypto wallet is a place where you can securely keep your crypto.. "
                    image="https://i.ibb.co/j8PXvyz/image-4.png"
                />
                <InfoCard
                    tag="Crypto Basic"
                    title="The fact about bitcoin must you know"
                    description="Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure.."
                    image="https://i.ibb.co/1QwhVwn/image-5.png"
                />
                <InfoCard
                    tag="TIPS & TRICKS"
                    title="When is the best time to invest in crypto?"
                    description="When prices are fluctuating, how do you know when to buy?"
                    image="https://i.ibb.co/zR1bJvC/image-6.png"
                />
                <InfoCard
                    tag="TIPS & TRICKS"
                    title="What Is DeFi? Inside the Wild West of Cryptocurrency.?"
                    description="Welcome to decentralized finance or DeFi, the new frontier of crypto that will.."
                    image="https://i.ibb.co/hsJXFc1/image-7.png"
                />
            </div>
        </div >
    )
}

export default LearnAbout;