import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    extendsClassName?: string
}

const Card = ({ children, extendsClassName }: CardProps) => {
    useEffect(() => {
        Aos.init()
    }
        , [])
    return (
        <div data-aos="fade-up" className={`${extendsClassName} py-3 px-5 bg-white/[0.02] backdrop-blur-[13.5px] rounded-2xl border-[2px] border-white/[0.05] border-opacity-18`}>
            {children}
        </div>
    )
}

export default Card