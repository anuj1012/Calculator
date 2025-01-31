import style from "./Input.module.css";

function Input(props){
    return (
   <>
   {<input className={style.inpt} type="text" placeholder="Enter the no." value={props.display} readOnly></input>}
   </>
    );
}
export default Input