import Style from '../Styles/header.module.css'
const Header = ({text}) =>{
    return(
        <header>
            <div className={Style.logo}>
                <img src={"./pictures/logo.png"} alt="" className={Style.img} />
                <h1>Romboay</h1>
            </div>
            <div className={Style.ancre}>
                <a href="">Accueil</a>
                <a href="">Nos Produits</a>
                <a href="">Services</a>
                <a href="">Authenticite</a>
            </div>
        </header>
    )
}

export default Header