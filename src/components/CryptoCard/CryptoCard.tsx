import { MoveUpRight } from 'lucide-react';
import Card from '../Card/Card';

interface CryptoCardProps {
    image: string
    name: string
    tag: string
    price: string
    percentual: number
    chart?: string
}

const CryptoCard = ({ image, name, tag, price, percentual, chart }: CryptoCardProps) => {
    return (
        <Card data-aos="fade-up" extendsClassName='w-[297px] h-[187px] basis-[330px]'>
            <div className="flex items-center gap-5 my-3">
                <img src={image} className="w-[50px] h-[50px] rounded-full" />
                <h1 className="font-bold text-sm">{name}</h1>
                <p className="bg-zinc-300 rounded-md p-1 text-xs text-mainBackground">{tag.toUpperCase()}</p>
                <div className='rounded-full ml-5 bg-white/[0.05]  p-2'>
                    <MoveUpRight className='w-[20px] h-[20px]' />

                </div>
            </div>
            <hr className="border-white/[0.05] my-2" />
            <div className="flex">
                <div>
                    <h1 className="font-bold">${price}</h1>
                    <h2 className="mt-5 font-bold text-zinc-300">{percentual}%</h2>
                </div>
                <div>{chart}</div>
            </div>

        </Card>
    )
}

export default CryptoCard