import React, { useState, useEffect } from "react";

const Header = () => {
  const [content, setcontent] = useState(true);
  const [index, setindex] = useState(1);
  useEffect(() => {
    if (index == bio.length) return;
    const timer = setTimeout(() => setindex(index + 1), 60);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  const bio = `Hi, My name is Salahuddin Sk.I am a mern stack web developer. I have Experience on React js , Next js,Html ,Css and Js .
    I also have hands on skills of Node js,Express and MongoDB. I have created real world projects using Html,Css and RecatJs and node, mongoDb.
    I am also skilled with python and Django. You can view my projects on  `;
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
              {content ? bio.substring(0, index) : bio}

              {
                index==bio.length &&
                <>
                <a
                  style={{ textDecoration: "none", color: "blueviolet" }}
                  href="https://gist.github.com/salahuddin123-cell"
                >
                  github.
                </a>
               
                </>
              }
              {/* <span><a className="btn btn-outline-primary btn-sm" onClick={()=>setcontent(!content)}>{content?'read more..':'read less.'}</a></span> */}
            </p>
          </div>
          <div class="img">
            <img src="img/myimg.jpg" alt="sskphoto" />
          </div>
          <div class="cv">
            <a
              id="down"
              href="https://drive.google.com/file/d/1hJDehGN668jOHs7hdJqsotXZbTqDnjYP/view?usp=sharing"
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
