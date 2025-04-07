
function Cta() {
  return (
    <div>
         <section id="cta" className="bg-p5 ">
        {/* <!-- Flex Container --> */}
        <div
          className="container w-[90%] py-20 flex flex-col items-center justify-between  mx-auto space-y-12 md:space-y-0 md:flex-row"
        >
          {/* <!-- Heading --> */}
          <h2
            className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left"
          >
            Simplify how your team works today
          </h2>
          {/* <!-- Button --> */}
          <div>
            <a
              href="#"
              className="p-3 px-6 pt-2 text-p5 bg-white rounded-full text-center shadow-2xl baseline hover:bg-p2 hover:text-white hover:shadow-none"
              >Get Started</a
            >
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta