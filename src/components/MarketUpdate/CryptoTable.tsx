import { Button } from "@/components/ui/button"

export default function CryptoTable() {
    return (
        <div className="bg-white/[0.02] rounded-lg shadow-md overflow-hidden">

            <div className="overflow-x-auto border-white/[0.05] border-opacity-18 border-2 rounded-xl">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-white/[0.02] text-white text-left">
                            <th className="px-6 py-3 font-medium">{"Rank".toUpperCase()}</th>
                            <th className="px-6 py-3 font-medium">{"Cryptocurrency".toUpperCase()}</th>
                            <th className="px-6 py-3 font-medium">{"Last Price".toUpperCase()}</th>
                            <th className="px-6 py-3 font-medium">{"Price Change".toUpperCase()}</th>
                            <th className="px-6 py-3 font-medium">{"Market Cap".toUpperCase()}</th>
                            <th className="px-6 py-3 font-medium">{"Action".toUpperCase()}</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-white/[0.05] border-opacity-18 bg-white/[0.02]">
                            <td className="px-6 py-4 text-white">1</td>
                            <td className="px-6 py-4 font-medium text-white">
                                <img className="rounded-full w-[30px] inline mr-5" src="data:image/png;base64,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" alt="" />
                                Bitcoin (BTC)</td>
                            <td className="px-6 py-4 text-white">$56,789.12</td>
                            <td className="px-6 py-4 text-green-400">+2.5%</td>
                            <td className="px-6 py-4 text-white">$1.2 Trillion</td>
                            <td className="px-6 py-4">
                                <Button size="sm" variant="custom">
                                    Trade
                                </Button>
                            </td>
                        </tr>
                        <tr className="border-b border-white/[0.05] border-opacity-18 bg-white/[0.02]">
                            <td className="px-6 py-4 text-white">2</td>
                            <td className="px-6 py-4 font-medium text-white">
                                <img className="rounded-full w-[30px] inline mr-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVyCtMa_rKwrl1y0hyWcqPda3eG0vssJBAX5xQznEPw&s" />
                                Ethereum (ETH)</td>
                            <td className="px-6 py-4 text-white">$1,789.45</td>
                            <td className="px-6 py-4 text-red-400">-1.2%</td>
                            <td className="px-6 py-4 text-white">$200 Billion</td>
                            <td className="px-6 py-4">
                                <Button size="sm" variant="custom">
                                    Trade
                                </Button>
                            </td>
                        </tr>
                        <tr className="border-b border-white/[0.05] border-opacity-18 bg-white/[0.02]">
                            <td className="px-6 py-4 text-white">3</td>
                            <td className="px-6 py-4 font-medium text-white">
                                <img className="rounded-full w-[30px] inline mr-5" src="https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png" />
                                Binance (BNC)</td>
                            <td className="px-6 py-4 text-white">$234.56</td>
                            <td className="px-6 py-4 text-green-400">+3.7%</td>
                            <td className="px-6 py-4 text-white">$15 Billion</td>
                            <td className="px-6 py-4">
                                <Button size="sm" variant="custom">
                                    Trade
                                </Button>
                            </td>
                        </tr>
                        <tr className="border-b border-white/[0.05] border-opacity-18 bg-white/[0.02]">
                            <td className="px-6 py-4 text-white">4</td>
                            <td className="px-6 py-4 font-medium text-white">
                                <img className="rounded-full w-[30px] inline mr-5" src="https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png" />
                                Tether (USDT)</td>
                            <td className="px-6 py-4 text-white">$0.50</td>
                            <td className="px-6 py-4 text-red-400">-2.1%</td>
                            <td className="px-6 py-4 text-white">$23 Billion</td>
                            <td className="px-6 py-4">
                                <Button size="sm" variant="custom">
                                    Trade
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}