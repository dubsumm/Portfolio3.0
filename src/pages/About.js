import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faDragon,
  faHome,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="homePage ">
      <div className="grid grid-cols-4">
        <div className="text-center">
          
        </div>
        <div className="text-center">
          
        </div>
      </div>
      <div className=" sm:w-1/2 w-1/2 secBG shadow-lg rounded  mx-auto p-6 ">
        <p className="aboutp mx-auto">
          {" "}
          Hi there I'm Will Summerlin, creator of this site! I am a Savannah, GA
          native and proud husband to my wife Sammie. I love weight lifting,
          e-sports, and I am an avid Sci-fi/Fantasy reader.
        </p>
      </div>
      <div className=" grid sm:grid-cols-4 grid-cols-1 gap-4 pt-12 pb-32">
        
        <div className="my-auto text-right">
          <FontAwesomeIcon icon={faDragon} className="aboutIcon " />
        </div>
        
        <div className="col-span-2  secBG shadow-lg rounded pr-6 pl-6 pt-8 pb-2">
          <p className="aboutp">
            {" "}
            Growing up, I always enjoyed digital tech as many of the folks in my
            generation. It's probably due to the unique gift of being a kid
            during the creation of a fully accessible worldwide web. I first
            dabbled in programming with my first language being Pascal in
            highschool. I made a floating skull loading bar and remembered
            thinking, " This is the pinnacle of achievement." In college I
            almost gave after a semester brush of C++, but I think it was
            because my instructor was a first time grad that made some
            assumptions about my classes coding experience. It was actually the
            reason I switched to the business school and graduated with an
            Accounting degree. From there I went on to a semi-successful career
            in Accounting, then sales, and even some project management.
            Unfortunately nothing seem to really click.
          </p>
        </div>
        <div className="my-auto">
        <FontAwesomeIcon icon={faDragon} className="aboutIcon " />
        </div>
        <div className="my-auto text-right">
        <FontAwesomeIcon icon={faKeyboard} className="aboutIcon" />
        </div>
        <div className="col-span-2 secBG shadow-lg rounded pr-6 pl-6 pt-8 pb-2">
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
<div className="my-auto">
<FontAwesomeIcon icon={faKeyboard} className="aboutIcon" />
</div>
<div className=" my-auto text-right">
<FontAwesomeIcon icon={faCoffee} className="aboutIcon" />
</div>
        <div className="col-span-2 secBG shadow-lg rounded pr-6 pl-6 pt-8 pb-2">
          <p className="aboutp ">
            My (caffeinated) journey so far has brought me through my first full
            time coding program with the Georgia Institute of Technology. After
            a mess of new skills at a proficient level and hair pulling moments
            of hunting typos and debugging syntax and logic issues I now hold
            the confidence to call myself a full stack developer!
          </p>
        </div>
        <div className="my-auto">
        <FontAwesomeIcon icon={faCoffee} className="aboutIcon" />
        </div>
      </div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
    </div>
  );
}
