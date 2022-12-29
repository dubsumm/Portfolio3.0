import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faKeyboard,
  faAnglesUp
} from "@fortawesome/free-solid-svg-icons";

export default function About() {

  return (
    <div className="homePage ">
      <FontAwesomeIcon
            icon={faAnglesUp}
            className="aboutIcon text-center"
          />
      <div className=" sm:w-1/3 w-10/12   py-5 mx-auto ">
        <p className="aboutp">
          Hi there I'm Will Summerlin, creator of this site! I am a Savannah, GA
          native and proud husband to my wife Sammie. I love weight lifting,
          e-sports, and I am an avid Sci-fi/Fantasy reader.
        </p>
      </div>
      
        <div>
        <div className="sm:w-1/3 w-10/12   mx-auto text-center">
          <FontAwesomeIcon
            icon={faKeyboard}
            className="aboutIcon text-center"
          />
        </div>
        <div className="sm:w-1/3 w-10/12   py-3 mx-auto">
          <p className="aboutp">
            {" "}
            In January of 2022 I changed jobs to a remote sales position and had
            the opportunity to take a month for learning a new skill. I chose to
            take an Introduction to Python online course and... just WOW! The
            constant opportunity to build and problem solve kindled a passion
            for software development I didn't know I possessed. After 3 months
            into my new role that I had happily accepted before getting back
            into programming I knew It just would not work long term as a
            career. I decided that software development was a passion I couldn't
            ignore. I took up my ergonomic mouse and blue light glasses and
            plowed headlong on an adventure to become a digital builder.
          </p>
        </div>
        
        <div className="sm:w-1/3 w-10/12 mx-auto text-center">
          <FontAwesomeIcon icon={faCoffee} className="aboutIcon" />
        </div>
        
        <div className="sm:w-1/3 w-10/12   py-3 mx-auto">
          <p className="aboutp ">
            My (caffeinated) journey so far has brought me through my first full
            time coding program with the Georgia Institute of Technology. After
            a mess of new skills at a proficient level and hair pulling moments
            of hunting typos and debugging syntax and logic issues I now hold
            the confidence to call myself a full stack developer!
          </p>
        </div>

      </div>
      <div>
      <div className="sm:w-1/4 w-10/12 mx-auto text-center uppercase secBG rounded text-white pt-2 mb-5">
        <h1 className=" font-extrabold text-black">
         My Tech Stack
          </h1>
      </div>
      </div>
      <div className=" sm:w-8/12  mx-auto">
        
        <div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-4 gap-2 pb-56 ml-10">
          <div></div>
        <div className="  skilltext secBG sm:col-span-4 rounded col-span-3 text-center p-2 mb-5">
            <p className="aboutp">
              This is my current tech stack. Check it
              out later as I continue to upskill!
            </p>
          </div>
          <div className="sm:inline hidden"></div>
          <div className="card" class="icon" alt="Bable">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
          </div>
          <div className="card" class="icon" alt="Bootstrap">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="CSS3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="Devicon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" />
          </div>
          <div className="card" class="icon" alt="ESLint">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="git">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="GitHub">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="GitLab">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="handlbars">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="GraphQL">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="heroku">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
          </div>
          
          <div className="card" class="icon" alt="HTML5">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
          </div>
          
          <div className="card" class="icon" alt="JavaScript">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </div>
          
          
          <div className="card" class="icon" alt="Jest">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          </div>
          
          <div className="card" class="icon" alt="jQuery">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="mongoDB">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="MySQL">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="Node.js">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="npm">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="React">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="Sequelize">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="slack">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="Visual Studio Code">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="webpack">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" />
          </div>
          <div className="sm:inline hidden"></div>
          <div className="card" class="icon" alt="webpack">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
          </div>
          <div className="card" class="icon" alt="webpack">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" />
          </div>
          
          
          <div className="card" class="icon" alt="webpack">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
          </div>
          <div className="sm:hidden inline"></div>
          <div className="card" class="icon" alt="webpack">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
