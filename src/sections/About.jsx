const About = () => {
  return (
    <section>
      <div id="about">
        <div className="container">

          <div className="relative px-3 bg-p4  flex  border-2 border-s3 rounded-7xl flex-col gap-3">
            <h2 className="max-w-400 mb-7 h3 text-p5 max-md:mb-6 max-md:h5">
              About
            </h2>
            <div
              className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50   max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
            >
              <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                Our vision is to become a leading global player in the agricultural industry by providing high-quality agricultural products and services that meet the needs of our customers. We strive to build a sustainable and profitable business that creates value for our stakeholders while promoting the growth and development of the agricultural sector,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
