const Features = () => {
    return (
        <section id="features" className="flex justify-center items-center w-[100%]">
            {/* <!-- Flex Container --> */}
            <div className="container w-[90%] flex flex-col px-4  space-y-12 md:space-y-0 md:flex-row">
                {/* <!-- What's Different? --> */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What&apos;s different about SmartDev Forge?
                    </h2>
                    <p className=" text-center text-p2 md:text-left max-md:w-[100%] ">
                    At SmartDevForge, we bring your ideas to life with clean, high-performing digital solutions. As a small team of 5 developers, we turn complex problems into simple, scalable results—quickly and efficiently, without the jargon. Our focus? Performance, reliability, and your satisfaction.
                        
                        
                             </p>
                </div>
                {/* <!-- Numbers List --> */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    {/* <!-- List Item 1 --> */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:spacex-6 md:flex-row">
                        {/* <!-- Heading --> */}
                        <div className="rounded-l-full bg-p2 text-white md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-p5">
                                    01
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Web Development                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mx-2 text-lg mb-4 font-bold md:block">
                            Web Development 
                            </h3>
                            <p className="text-p2">
                            From sleek marketing sites to robust web applications, we build fast, scalable, and user-friendly web solutions tailored to your needs.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:spacex-6 md:flex-row">
                        {/* <!-- Heading --> */}
                        <div className="rounded-l-full bg-p2 text-white md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-p5">
                                    02
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Mobile App Development
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mx-2 text-lg mb-4 font-bold md:block">
                            Mobile App Development
                            </h3>
                            <p className="text-p2">
                            Reach your audience on the go with powerful mobile apps that combine performance with pixel-perfect design.                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:spacex-6 md:flex-row">
                        {/* <!-- Heading --> */}
                        <div className="rounded-l-full bg-p2 text-white md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-p5">
                                    03
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                AI-Powered Solutions
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mx-2 text-lg mb-4 font-bold md:block">
                            AI-Powered Solutions
                            </h3>
                            <p className="text-p2">
                            We integrate intelligent automation and machine learning to create smart systems that help you work smarter, not harder.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
