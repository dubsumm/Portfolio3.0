
import "../App.css"
import pic from '../assets/about.jpeg'

export default function Home() {

  return (
    <div className="homePage">
      <div className="pt-12"></div>
       <div className=" grid grid-cols-1 sm:grid-cols-2 secBG w-10/12 sm:w-1/2 h-10/12  mt-12 mx-auto rounded mb-20">
        <div className="pt-12 mt-12"> 
          <h2 className="homeQuote ml-5 "> “It's the job that's never started as takes longest to finish.”</h2>
          <p className="aboutp text-right mr-10">-J.R.R. Tolkien</p>
          <div className="">
          <p className=" homep mt-5 w-8/12 mx-auto"> My favorite season fall is upon us and I like my site to reflect its passage, (thus the orange haha) </p>
          <p className=" homep w-8/12 mx-auto">Thanks for checking it out I hope you look around and have some fun! </p>
          <p className="homep1 mx-auto w-10/12">(If you come back around winter you might even catch a chill.)</p>
          </div>
        </div>
          <img className=" " src={pic}></img>

        </div>
        
        
      
        

      </div>
  )
}

