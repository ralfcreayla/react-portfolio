import Rimage from '../computer.png';
const navbar = () => {
    return(
        
        <div className="navbar">
            <div class="brand-title"><img class="Rimage" src={Rimage} alt="computer" /> Ralf Creayla</div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li><a href="https://github.com/ralfcreayla" target="_blank"><i class="nes-icon github is-medium"></i></a></li>
            <li><a href="https://www.linkedin.com/in/ralfcreayla/" target="_blank"><i class="nes-icon linkedin is-medium"></i></a></li>
            <li><a href="https://www.instagram.com/ralfoxshet" target="_blank"><i class="nes-icon instagram is-medium"></i></a></li>
          </ul>
        </div>
        </div>
        
    );
}

export default navbar;