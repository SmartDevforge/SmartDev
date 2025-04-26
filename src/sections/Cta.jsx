
function Cta() {
  return (
    <div>
         <section id="cta" className="bg-p5 ">
        {/* <!-- Flex Container --> */}
        <div
          className="container w-[90%] py-20 flex flex-col items-center justify-between  mx-auto space-y-12 md:space-y-0 md:flex-row"
        >
          {/* <!-- Heading --> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-white md:text-left md:max-w-xl">Streamline your projects with SmartDevForge’s efficient approach.          </h2>
          {/* <!-- Button --> */}
          <div>
            <a
              href="#"
              className="p-3 px-6 pt-2 text-p5 bg-white rounded-full text-center shadow-2xl baseline hover:bg-p2 hover:text-white hover:shadow-none"
              >View Our Work</a
            >
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta