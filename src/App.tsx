import FeaturesSession from "./components/FeaturesSession/FeaturesSession"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import LearnAbout from "./components/LearnAbout/LearnAbout"
import MarketUpdate from "./components/MarketUpdate/MarketUpdate"
import { Button } from "./components/ui/button"

function App() {


  return (
    <main className="bg-mainBackground h-screen">
      <Home />
      <FeaturesSession />

      <section className=" bg-mainBackground my-28">
        <div className="rounded-2xl p-6 items-center lg:flex lg:justify-between lg:w-9/12 w-7/12 mx-auto border-[2px] border-white/[0.05] border-opacity-18 text-white">
          <div className="">
            <h1 className="font-bold text-2xl">New In Cryptocurrency?</h1>
            <h2 className="w-7/12 mt-5 text-zinc-400">We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.</h2>
          </div>
          <a href="https://coinbase.com/en-br/learn/crypto-basics" target="_blank">
            <Button className="hover:bg-customPrimaryColor/70 bg-customPrimaryColor h-14 lg:mt-0 mt-6">Learn & Explore Now</Button>
          </a>

        </div>
      </section>

      <MarketUpdate />
      <LearnAbout />
      <Footer />
    </main>
  )
}

export default App
