import '../styles/footer.css'
import github from '../../public/github.png'

export default function Footer() {
    return(
        <div className='footer'>
            <h1 className='madeBy'>Made by Efe Tekin</h1>
            <a target='blank' href='https://github.com/efetekin5'>
                <img className='gitHubIcon' src={github}></img>
            </a>
        </div>
    )
}