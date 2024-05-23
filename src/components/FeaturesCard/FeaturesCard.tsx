import Card from "../Card/Card"
import { ArrowRight } from "lucide-react"

interface FeaturesCardProps {
    image: string
    title: string
    description: string
}

const FeaturesCard = ({ image, title, description }: FeaturesCardProps) => {
    return (
        <Card extendsClassName="w-[297px] h-[320px] 2xl:mb-28">
            <div className='rounded-full p-2 mt-3'>
                <img src={image} className="w-[60px] h-[60px] rounded-full" />
            </div>
            <div className="">
                <h1 className="text-white mt-4 text-xl">{title}</h1>
                <p className='text-zinc-400 mt-4'>{description}</p>
            </div>
            <p className="mt-10 text-customPrimaryColor flex gap-2">See Explained <ArrowRight className="w-[20px]"/> </p>
        </Card>
    )
}

export default FeaturesCard