
import '../styles/cards.css'

export default function Cards(props){
    return(
        <div className={`cards ${props.className || ""}`}>
            <img src={props.img_src} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>{props.value}</button>
        </div>
    )
}