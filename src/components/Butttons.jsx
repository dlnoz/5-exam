
function Buttons({title, extraClass, Img}){
    return(
        <button className={`${extraClass} w-[266px] h-[69px] rounded-[10px] flex justify-center items-center gap-[10px]`}>
      {
        Img ? <img src={Img ||null} alt="Footer Btn Img" /> : ""
      }
            
             {title}
        </button>
    )
}

export default Buttons