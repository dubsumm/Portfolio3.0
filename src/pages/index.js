
import "../App.css"
import Pic from "../assets/AtlantisPic.jpg"
import { Animator, ScrollContainer, ScrollPage, batch, StickyIn, FadeIn, Fade, ZoomIn, Sticky, FadeOut, MoveOut, MoveIn, ZoomOut } from "react-scroll-motion"




export default function Home() {

  return (
    <div className="homePage">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -400))}>

            <div className="hmNew p-3 rounded text-center"><h1> Hover the top right to navigate or continue to scroll</h1></div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), MoveIn(0, 400), MoveOut(0, -400))}>

            <div className="rounded ">
              <img src={Pic} className="rounded" alt="Will" />
            </div>
          </Animator>
          <Animator animation={batch(Fade(), Sticky(50,60), MoveIn(-300, 0), MoveOut(-500, 0))}>
            <div className="hmNew p-3 rounded">
              <h3 className="text-white">Hiya! I'm Will and I program... all kinds of stuff</h3>
            </div>

          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 500), MoveOut(0, -400))}>

            <div className="rounded hmNew p-3 ">
              <h3 className="text-white">I am currently under contract until February building a React dashboard for a VR training company, but I am always open to new opportunities.</h3>
            </div>
          </Animator>

        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 700))}>


          </Animator>

        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(-400, 400), )}>

            <div className="hmNew p-3 rounded ">
              <h3 className="text-white">Thanks for checking out my site! And if you'd like to connect you can shoot me an email on the Contact page up there. 👆 </h3>
            </div>
          </Animator>
          <Animator animation={batch(Fade(), Sticky(50,70), MoveIn(400, 400), )}>

            <div className="hmNew p-2 rounded ">
              <h3 className="text-white"> Or hit me up on my socials which are down here. </h3>
              <h4 className="text-center">👇</h4>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

    </div>
  )
}

