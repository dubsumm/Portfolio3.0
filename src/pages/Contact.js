export default function Contact() {
  return (
    <div className=" homePage " id="contact">
      <h2 className=" text-center text-uppercase text-white p-4 m-auto headersBG sm:w-full w-10/12">
        Hit me up!
      </h2>
      <div className=" sm:w-8/12 w-10/12 m-auto pt-24  contactBG">
        <form
          target="_blank"
          action="https://formsubmit.co/676eb6ebd07f887811064705af76dfc2"
          method="POST"
        >
          <div className="form-group grid grid-cols-1 sm:w-1/2 w-3/4 mx-auto" id="contactForm">
            <div className="form-row ">
              <div className="col pb-2">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                ></input>
              </div>
              <div className="col pb-2">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div className="form-group pb-8 text-center">
                <textarea
                  placeholder="Your Message"
                  className="form-control"
                  name="message"
                  rows="6"
                  required
                ></textarea>
                <button
                  type="submit"
                  className=" subbtn mt-10 "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
