import { aboutusImg } from "../assets";

const About = () => {
  return (
    <section>
      <div id="about" className=" bg-p4 py-[90px]">
        <div className="container flex justify-center">
          <div className="relative flex-col w-[50%] max-md:w-full  flex gap-3">
            <div className="flex justify-between items-center text-left gap-2  max-md:flex-col-reverse">
              <div className="text-[19px] text-p2 text-left  w-[70%] max-md:w-full">At Teefey, we bring the freshest produce and authentic Nigerian staples straight to your table. From vibrant Ofada rice to succulent dry fish and farm-fresh vegetables, we’re your one-stop store for the best in food e-commerce.
                Our mission is simple: to offer high-quality, wholesome products that celebrate the rich flavors of Nigerian cuisine, all at prices that make healthy eating accessible to everyone.</div>
              <p className="aboutus">
                About <br className="max-md:hidden" /> Us
              </p>


            </div>

            <div className="flex gap-[10px] justify-center items-start">
              <div className="img">
                <img className="h-[40dvh] w-[100dvw] max-md:hidden " src={aboutusImg} alt="" />
              </div>
              <div className="flex justify-start  items-start text-left flex-col gap-5">
                <p className="text-[16px] text-p2">We know what it takes to make your shopping experience delightful, and we’re committed to delivering not just the freshest ingredients, but also the best service you’ll find anywhere. </p>
                <p className="text-[16px] text-p2">Whether you’re a home cook crafting a family meal or a food enthusiast exploring new recipes, we’re here to ensure you get the finest produce with ease and convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
