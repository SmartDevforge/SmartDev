import { useRef, useState } from "react";
const Contact = () => {

  const [Error, setError] = useState("");
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    firstname: "",
    lastname:"",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const formInitialDetails = {
    firstname: "",
    lastname:"",
    email: "",
    message: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(form),
      });
      console.log(response);
      alert("Thank you. I will get back to you as soon as possible.");
      setLoading(false);
      setError("");
      setForm(formInitialDetails);
    } catch (error) {
      alert(error);
      setError(error.message);
      setLoading(false);
      setForm(formInitialDetails);
    }
  };
  return (
    <section>
      <div
        id="contact"
        className=" relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center justify-center  ">
            <div className="relative max-md:w-full">
            
                <h2 className="w-full capitalize h3 text-p1 ">
                  Contact us
                </h2>
                <p className="text-p2 max-w-4xl">
                Let’s chat how can we help you.
                  </p>

              <div
                className=" w-full  rounded-7xl "
              >
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-12 text-p1 w-[100%]  flex flex-col gap-8"
                >
                  {Error && <div style={{ color: "tomato" }}>{Error}</div>}
                  <div className="flex  gap-8">
                  <label className="flex flex-col text-p1">
                    <span className="text-p1 font-medium mb-4">Your Name</span>
                    <input
                      type="text"
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      placeholder="john"
                      className="bg-tertiary w-full py-2 px-6 bg-white placeholder:text-secondary text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                    />
                  </label>
                  <label className="flex flex-col text-p1">
                    <span className="text-p1 font-medium mb-4">Your email</span>
                    <input
                      type="text"
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      placeholder="doe"
                      className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                    />
                  </label>
                  </div>

                  <label className="flex flex-col text-p1">
                    <span className="text-p1 font-medium mb-4">Your email</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@example.com"
                      className="bg-tertiary py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                    />
                  </label>
                  <label className="flex flex-col text-p1">
                    <span className="text-p1 font-medium mb-4">Your Message</span>
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What is your message"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary bg-white  text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                    />
                  </label>

                  <button
                    type="submit"
                    className="bg-p2 w-full py-1.5 px-10 rounded-[5px] outline-none  text-s1  shadow-md shadow-primary"
                  >
                    {loading ? "Sending..." : "Send Message..."}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
