const Features = () =>{
return(
    <section id="features" className="flex justify-center items-center w-[100%]">
            {/* <!-- Flex Container --> */}
            <div className="container w-[90%] flex flex-col px-4  space-y-12 md:space-y-0 md:flex-row">
                {/* <!-- What's Different? --> */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What&apos;s different about SmartDev Forge?
                    </h2>
                    <p className="max-w-sm text-center text-p2 md:text-left">
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
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
                                    Track company-wide progress
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mx-2 text-lg mb-4 font-bold md:block">
                                Track company-wide progress
                            </h3>
                            <p className="text-p2">
                                See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.
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
                                    Advanced built-in reports
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mx-2 text-lg mb-4 font-bold md:block">
                                Advanced built-in reports
                            </h3>
                            <p className="text-p2">
                                Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                            </p>
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
                                    Everything you need in one place
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mx-2 text-lg mb-4 font-bold md:block">
                                Everything you need in one place
                            </h3>
                            <p className="text-p2">
                                Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}

export default Features
