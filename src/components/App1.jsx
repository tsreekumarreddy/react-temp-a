import "./App1.css"
import styles from "./App1.module.css"
export default function App1(){
    const mystyle={
        backgroundColor:"orange",
        color:"blue",
    };
    return (
        <div>
        <h1>This is App1</h1>
        <p style={{backgroundColor:'pink',color:"blue"}}>This is a paragraph</p>
        <p style={mystyle}>This is second paragraph</p>
        <p className="AppTxt">This is third paragraph</p>
        <p className={styles.txtPara}>This is fourth paragraph</p>
        </div>
    )
}