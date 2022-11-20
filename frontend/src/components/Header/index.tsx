import logo from '../../assets/logo.svg'
import  './styles.css'
function Header() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              developed by 
              <a href="https://www.linkedin.com/in/jm-pereira/"> @Matheus_Carmello</a>
            </p>
        </div>
    </header>
  )
}

export default Header
