interface ElipseProps {
    bgColor: string
    translateX: string
    translateY: string
}

const Elipse = ({bgColor, translateX, translateY}: ElipseProps) => {
    return <div className={` ${bgColor} ${translateX} ${translateY} w-[675px] h-[314px] absolute blur-[400px] rounded-[100%] text-white right-[40%]   opacity-30`}></div>
}
export default Elipse;