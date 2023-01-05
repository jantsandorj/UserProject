export default function footer (props){
    return (
        <footer>
            <p>Copyright {props.date.getFullYear()}</p>
        </footer>
    )
}