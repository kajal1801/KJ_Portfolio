
const Navbar = () => {
    return (
        <div id="navbar">
            <div className="navbar-content">
                <p id="username">kajal1801.</p>
                <div className="nav-menu">
                    <a href="#" className="hover-underline-animation">About</a>
                    <a href="#" className="hover-underline-animation">Experience</a>
                    <a href="#" className="hover-underline-animation">Socials</a>
                </div>
                <div className="nav-btn">
                    <button className="main-btn" id="nav-connect">
                        <div>Let&apos;s connect</div>
                        <div className="sideline">
                            <span className="line" id="line11"></span>
                            <span className="line" id="line21"></span>
                            <span className="line" id="line31"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar