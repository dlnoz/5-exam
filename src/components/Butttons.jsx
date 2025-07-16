function Buttons({title, extraClass}){
    return(
        <button className={`${extraClass} w-[266px] h-[69px] rounded-[10px]`}>{title}</button>
    )
}

export default Buttons