import { aboutusImg } from "../assets";

const About = () => {
  return (
    <section>
      <div id="about" className=" bg-p4 py-[90px]">
        <div className="container flex justify-center">
          <div className="relative w-[100%] max-md:flex-col  flex gap-3">
            <div className="flex  justify-start items-start w-[100%] text-left flex-col ">
                <p className="text-p5 text-[30px]">About Us</p>
                <img className="h-auto w-[100%] max-md:hidden " src={aboutusImg} alt="" />
            </div>

            <div className="text-[16px] w-[100%] flex flex-col justify-center items-start gap-5 text-p2 text-left">
              <p>
                At Teefey, we bring the freshest produce and authentic Nigerian staples straight to your table. From vibrant Ofada rice to succulent dry fish and farm-fresh vegetables, we’re your one-stop store for the best in food e-commerce.
                Our mission is simple: to offer high-quality, wholesome products that celebrate the rich flavors of Nigerian cuisine, all at prices that make healthy eating accessible to everyone.
              </p>
              <p className="text-[16px] text-p2">We know what it takes to make your shopping experience delightful, and we’re committed to delivering not just the freshest ingredients, but also the best service you’ll find anywhere. </p>
              <p className="text-[16px] text-p2">Whether you’re a home cook crafting a family meal or a food enthusiast exploring new recipes, we’re here to ensure you get the finest produce with ease and convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
