import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    tag: string
    title: string
    description: string
    image: string
    articleLink: string

}

const InfoCard = ({ tag, title, description, image, articleLink }: InfoCardProps) => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <a href={articleLink} target="_blank">
            <div data-aos="fade-right" className="w-[315px] basis-[320px] h-[366px] rounded-xl bg-white/[0.02] backdrop-blur-[13.5px]border-[2px] border-white/[0.05]">
                <div className='h-[150px]'>
                    <img src={image} className="w-full relative" />
                </div>
                <div className="p-3">
                    <p className="bg-zinc-800/80 w-max mt-2 p-1 text-white uppercase text-xs rounded-sm absolute ">{tag}</p>
                    <h1 className="text-white mt-14 text-xl">{title}</h1>
                    <p className='text-zinc-400 mt-4 text-sm'>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default InfoCard