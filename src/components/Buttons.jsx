import style from "./Button.module.css"

function Button({onButtonClick}){
    
    let btn =["1","2","3","4","5","6","7","8","9","0","+","-","*","=","/","C"];
    return(
     <>
     <div className={style.btncontainer}>
       {btn.map((button=> <button className={style.btn} onClick={()=>onButtonClick(button)}>{button}</button>))}
     </div>
     </>
    );
}
export default Button