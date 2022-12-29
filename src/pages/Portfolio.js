import SufferCarousel from "../components/SufferCarousel";
import CthuluCarousel from "../components/CthuluCarousel";
import MccCarousel from "../components/MccCarousel";


export default function Portfolio() {

  return (
    <div className="homePage aboutp">
      <h2 className="text-center text-uppercase p-4 m-auto headersBG">
        My work so far
      </h2>
      <div className="mx-auto  lg:w-8/12 sm:10/12 w-full grid grid-cols-1 sm:grid-cols-2  contactBG gap-4">
        <div className="mt-5">
          <SufferCarousel />
        </div>
        <div className="w-full p-5 ">
          <p>
            An ode to the classic breakout game with a couple of awesome extra
            easter eggs imbedded within.
          </p>
          <p className=" ml-5 -mt-3"> (if you know where to look.)</p>
          <div className="grid grid-cols-2">
            <ul className=" h-full list-disc ">
              <p className="mt-2 uppercase">Front-End</p>
              <li className="ml-4 -mt-3"> ReactJS</li>
              <li className="ml-4"> Bootstrap</li>
              <li className="ml-4"> Canvas</li>
            </ul>
            <ul className="list-disc">
              <p className=" mt-2 uppercase">Back-End</p>
              <li className="ml-4 -mt-3"> MongoDB</li>
            </ul>
          </div>
          <div className="text-center ">
            <button className=" portButtons mb-4">
              <a
                href="https://suffer-game-gtbootcamp.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="portButtonText"
              >
                Game On
              </a>
            </button>
          </div>
        </div>

        <div className=" m-auto sm:hidden inline ">
          <CthuluCarousel />
        </div>

        <div className="  w-full p-5 ">
          <p className="">
            A modern spin on the 8-bit turn-based retro video games of the 80s.
            Choose your figher and face off against Lord Cthulhu in this
            light-hearted save the world style game.
          </p>

          <div className="grid grid-cols-2">
            <ul className=" h-full list-disc ">
              <p className=" mt-2 uppercase">Front-End</p>
              <li className="ml-4 -mt-3"> JS6</li>
              <li className="ml-4"> Bootstrap</li>
              <li className="ml-4"> Handlebars</li>
            </ul>
            <ul className="list-disc">
              <p className=" mt-2 uppercase">Back-End</p>
              <li className="ml-4 -mt-3"> MySQL</li>
            </ul>
          </div>
          <div className="text-center ">
            <button className=" portButtons mb-4">
              <a
                href="https://lit-crag-19257.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className=" portButtonText"
              >
                Save Us!
              </a>
            </button>
          </div>
        </div>

        <div className=" m-auto sm:inline hidden">
          <CthuluCarousel />
        </div>

        <div className=" m-auto">
          <MccCarousel />
        </div>
        <div className="  w-full p-5 ">
          <p className="">
            A WIP digital storefront for a law firm the goal being my clients
            potential clients on a seamless, crisp user journey from landing
            page to successful contact.
          </p>
          <p className=" mt-2 uppercase text-center">Tech </p>
          <div className="grid grid-cols-2">
            <ul className=" h-full list-disc ">
              <li className="ml-1 -mt-3"> ReactJS</li>
              <li className="ml-1"> TailwindCSS</li>
              <li className="ml-1"> Contact form npm</li>
            </ul>
            <ul className="list-disc">
              <li className="ml-1 -mt-3"> React scroll</li>
              <li className="ml-1 "> CSS3(honing)</li>
              <li className="ml-1 ">Styled Components</li>
            </ul>
          </div>
          <div className="text-center ">
            <button className=" portButtons mb-4">
              <a
                href="https://hunterpadgett.github.io/freelance-template/"
                target="_blank"
                rel="noreferrer"
                className=" portButtonText"
              >
                Lawyer Up
              </a>
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
