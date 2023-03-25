import React, { useState, useEffect } from "react";

const Header = () => {
  const [content, setcontent] = useState(true);
  const [index, setindex] = useState(1);
  useEffect(() => {
    if (index == bio.length) return;
    const timer = setTimeout(() => setindex(index + 1), 30);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  const bio = `I am Salahuddin Sk, a Front End Developer proficient in React.js, HTML, CSS, and JavaScript, with expertise in MUI, Tailwind CSS, and Antd. Skilled in Node.js and MongoDB for backend development. Dedicated to delivering clean and efficient code for optimal user experience.  `;
  return (
    <div>
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
      <div className="bodi">
        <div class="wrap">
          <div class="bio">
            <p id="q">
              {content ? bio.substring(0, index) : bio}

              {/* {index == bio.length && (
                <>
                  <a
                    style={{ textDecoration: "none", color: "blueviolet" }}
                    href="https://gist.github.com/salahuddin123-cell"
                  >
                    github.
                  </a>
                </>
              )} */}
              {/* <span><a className="btn btn-outline-primary btn-sm" onClick={()=>setcontent(!content)}>{content?'read more..':'read less.'}</a></span> */}
            </p>
          </div>
          <div className="image">
          <div class="img">
            <img src="img/myimg.png" alt="sskphoto" />
          </div>
          <div class="cv">
            <a
              id="down"
              href="https://drive.google.com/file/d/1hJDehGN668jOHs7hdJqsotXZbTqDnjYP/view?usp=sharing"
              download=""
              target="_blank"
            >
              Download Cv
            </a></div>
          </div>
        </div>
        {/* <div class="custom-shape-divider-bottom-1678466912">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
