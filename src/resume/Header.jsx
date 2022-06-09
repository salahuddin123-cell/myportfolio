import React, { useState } from "react";

const Header = () => {
  const [content, setcontent] = useState(true);
  
  const bio =
    `Hi, My name is Salahuddin Sk.I am a junior mern stack web developer. I have done my B.Tech in Mechanical Engineering in 2020 .
    I have hands on skills of web technologies likeHtml,CSS,JavaScript,Bootstrap , RecatJs ,Node js,Express and MongoDB. I have created real world projects using Html,Css and RecatJs.I also have skill of node js, Express js and MongoDb as a backend developer.And I have also made so many dummy projects . You can view my projects on  `;
  return (
    <>
      <section class="secone">
        <nav>
          <input type="checkbox" name="" id="bars" />
          <label for="bars" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="logo" for="">
            <img src="img/sssk.png" alt="MY LOGO" />
          </label>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li class="m">
              <a href="#skilll">Skills</a>
            </li>
            <li class="m">
              <a href="#projects">Projects</a>
            </li>
            <li class="m">
              <a href="#socials">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="wrap">
          <div class="bio">
            <h2 id="aboutme">About me</h2>

            <p id="q">
              {content ? bio.substring(0, 227) : bio}

             {content?'':<span>
                <a
                  style={{ textDecoration: "none", color: "blueviolet" }}
                  href="https://gist.github.com/salahuddin123-cell"
                >
                  github.
                </a>
              </span>} 
              <span><a className="btn btn-outline-primary btn-sm" onClick={()=>setcontent(!content)}>{content?'read more..':'readless'}</a></span>
            </p>
          </div>
          <div class="img">
            <img src="img/saladinphoto.jpg" alt="sskphoto" />
          </div>
          <div class="cv">
            <a
              id="down"
              href="https://drive.google.com/file/d/1B3HBGeC1ggzJ_vbZBU5i_cW82v-reIaC/view?usp=sharing"
              download=""
              target="_blank"
            >
              Download Cv
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
