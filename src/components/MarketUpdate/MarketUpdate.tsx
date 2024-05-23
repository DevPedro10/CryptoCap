import { Button } from "../ui/button";
import CryptoTable from "./CryptoTable";

const MarketUpdate = () => {
    return (
        <div className="h-max my-36 w-9/12 mx-auto hidden 2xl:block">
            <div>
                <h1 className="text-white text-2xl">Market Update</h1>
                <h2 className="text-zinc-400 mt-3">Cryptocurrency Categories</h2>
                
                <Button variant={"outline"} className="my-5">Popular</Button>
            </div>

            <CryptoTable />
        </div>
    )

}
export default MarketUpdate;