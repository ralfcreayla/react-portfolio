import cat from '../cat.gif';
import undercons from '../underconstruction.png';
import mail from '../mail.gif';
const body = () => {
    return(
        
        <div className="nbody">
            <div class="grid-container">
    <div class="grid1" id="ralf">
        <p class="nes-balloon from-left nes-pointer hellobaloon" >
            <a class="hello" id="text">Hi! My Name is Ralf Angelo Creayla and I'm a Full Stack Web Developer from the Philippines.</a>
            
          </p>
          
          <img class="saitama" src={cat}/>
    </div>
    
    <div class="nes-container is-dark with-title grid2" id="workexp">
        <p class="title">Work Experience</p>
        <div class="lists">
           
              <div class="work1 nes-pointer"  data-tooltip="Soon.."><i class="nes-icon is-medium star"></i> Full Stack Web Developer</div>
              <div class="work2 nes-pointer" data-tooltip="Shopee (2018 - Current)"><i class="nes-icon is-medium star"></i> QA Specialist</div>
              <div class="work3 nes-pointer" data-tooltip="Lazada (2017 - 2018)"><i class="nes-icon is-medium star"></i> Operation Specialist</div>
              <div class="work4 nes-pointer" data-tooltip="Knoll Ridge (2015 - 2017)"><i class="nes-icon is-medium star"></i> Data Entry</div>
              <div class="work5 nes-pointer" data-tooltip="PH Batteries Inc.(2014 - 2015)"><i class="nes-icon is-medium star"></i> IT Staff</div>
              <div class="work5 nes-pointer" data-tooltip="Freelance (2013 - 2014)"><i class="nes-icon is-medium star"></i> Freelance</div>
          </div>
      </div>
      <div class="nes-container with-title grid3" id="education">
        <p class="title">Education</p>
        <div class="educ1" ><i class="nes-icon trophy is-medium education"></i>Feu Institute of Technology</div>
        <div class="educ2" >BS Computer Engineer</div>
        </div>
        <div class="grid4" id="demo1">
            
            <img class="imagecomputer" src="https://i.pinimg.com/originals/50/27/2a/50272a0d34a8666dbe24b03c0544d7ec.gif" alt="computer"/>
          </div>
          <div class="nes-container with-title grid5" id="skills">
            <p class="title">Skills</p>
            <div class="skills1">1. Html <progress class="nes-progress is-primary bar" value="70" max="100" ></progress></div>
            <div class="skills2">2. CSS  <progress class="nes-progress is-primary bar" value="70" max="100" ></progress></div>
            <div class="skills3">3. Javascript <progress class="nes-progress is-primary bar" value="50" max="100" ></progress></div>
            <div class="skills4">4. C++ <progress class="nes-progress is-primary bar" value="80" max="100" ></progress></div>
            <div class="skills5">5. Java <progress class="nes-progress is-primary bar" value="50" max="100" ></progress></div>
            <div class="skills6">6. MS Excel <progress class="nes-progress is-primary bar" value="100" max="100" ></progress></div>
        </div>
            <div class="nes-container is-dark with-title grid6" id="projects">
                <p class="title">Projects</p>
                
                <div class="grid6a">
                  <img class="projectimage1" href="www.google.com" src={undercons} alt="underconstruction"/>
                  
                  <img class="projectimage2" src={undercons}/>
                </div>
                
                
                
              </div>
              <form class="nes-container with-title is-centered grid7"  id="contactme" >
                    <div class="grid70">Contact Me <img src={mail} /></div>
                    <div class="grid7a">
                    <label for="name_field" class="inputs">Name</label>
                    <input type="text" name="name" id="grid7a" class="nes-input"/>
                    </div>

                    <div class="grid7b">
                    <label for="name_field" class="inputs">Email</label>
                    <input type="email" name="email" id="grid7b" class="nes-input"/>
                    </div>

                     <div class="grid7c">
                    <label for="name_field" class="inputs">Message</label>
                    <input type="text" id="message" class="nes-input" />
                     </div>

                     <div class="grid7button">
                    <button type="submit" class="nes-btn is-primary">Submit</button>
                    </div>
                </form>
                </div>
        </div>
        
    );
}








export default body;