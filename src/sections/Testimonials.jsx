/* eslint-disable react/no-unescaped-entities */
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
            “SmartDevForge transformed our approach to development. Their team’s expertise and dedication streamlined our projects, delivering results faster and more efficiently than ever.”
          </p>
        </div>

        {/* <!-- Testimonial 2 --> */}
        <div
          className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
        >
          <img src={Averter2}className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Ali Bravo</h5>
          <p className="text-sm text-darkGrayishBlue">
          "Working with SmartDevForge has been a game-changer. They turned complex challenges into simple solutions, keeping us on track and focused on what really matters." 
          </p>
        </div>

        {/* <!-- Testimonial 3 --> */}
        <div
          className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
        >
          <img src={Averter3} className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Richard Watts</h5>
          <p className="text-sm text-darkGrayishBlue">
          "SmartDevForge’s seamless collaboration and commitment to quality have helped us reach new heights. They’re not just developers—they’re true partners in our success.&quot;
          </p>
        </div>
      </div>
      {/* <!-- Button --> */}
      <div className="my-16">
        {/* <Link to="" className=" p-3 px-6 pt-2 text-[white] bg-p5 rounded-full baseline hover:bg-p4">Get Started</Link> */}
      </div>
    </div>
  </section>
  )
}

export default Testimonials