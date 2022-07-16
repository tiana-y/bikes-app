import "../styles/Header.scss";
import logo from '../icons/bike_circle_logo.svg';

export function Header() {
    return (
        <header className="header">
            <div className="left-part">
                <img className="logo" src={logo} alt="bike-logo" width={45}></img>
                <div className="app-name">CityBikes</div>
            </div>
            <div className="middle-part">
                Current station: <span>Bycyklen, Copenhagen</span>
            </div>
            <div className="right-part">
                Stations online: 99+
            </div>
        </header>
    )
}