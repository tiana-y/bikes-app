import "../styles/Footer.scss";

export function Footer() {
    return (
        <div className="footer">
            <div className="left-part">
                App is using open &nbsp;
                <a href="http://api.citybik.es/v2/">
                     CityBikes API
                </a>
            </div>
            <div className="right-part">
                You can visit my &nbsp;
                <a href="https://github.com/tiana-y">
                    GitHub 
                </a>
                &nbsp;if you'd like
            </div>
        </div>
    )
}