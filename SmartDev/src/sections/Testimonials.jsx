import { Link } from "react-router-dom"
import { Averter1, Averter2, Averter3 } from "../Components/img"

function Testimonials() {
  return (
    <section id="testimonials" className="flex justify-center items-center w-[100%]">
    {/* <!-- Container to heading and testm blocks --> */}
    <div className="max-w-6xl  w-[90%] mt-32 text-center">
      {/* <!-- Heading --> */}
      <h2 className="text-4xl font-bold text-center">
        What&apos;s Different About Manage?
      </h2>
      {/* <!-- Testimonials Container --> */}
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {/* <!-- Testimonial 1 --> */}
        <div
          className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
        >
          <img src={Averter1} className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Anisha Li</h5>
          <p className="text-sm text-darkGrayishBlue">
            “SmartDev forge has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.”
          </p>
        </div>

        {/* <!-- Testimonial 2 --> */}
        <div
          className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
        >
          <img src={Averter2}className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Ali Bravo</h5>
          <p className="text-sm text-darkGrayishBlue">
            “We have been able to cancel so many other subscriptions since
            using SmartDev. There is no more cross-channel confusion and
            everyone is much more focused.”
          </p>
        </div>

        {/* <!-- Testimonial 3 --> */}
        <div
          className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
        >
          <img src={Averter3} className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Richard Watts</h5>
          <p className="text-sm text-darkGrayishBlue">
            “SmartDev forge has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.”
          </p>
        </div>
      </div>
      {/* <!-- Button --> */}
      <div className="my-16">
        <Link to="" className=" p-3 px-6 pt-2 text-[white] bg-p5 rounded-full baseline hover:bg-p4">Get Started</Link>
      </div>
    </div>
  </section>
  )
}

export default Testimonials