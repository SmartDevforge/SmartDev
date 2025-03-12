import { useRef, useState } from "react";
const Contact = () => {

  const [Error, setError] = useState("");
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
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
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await fetch("https://thompsonsolomonmailserver.onrender.com/contact", {
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
        name="Contact"
        className=" relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center justify-center  ">
            <div className="relative border-2 p-3 rounded-14 border-s3 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
            
                <h2 className="w-full h3 text-p1 ">
                  Contact
                </h2>
              <div
                className=" w-full  rounded-7xl "
              >
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-12 text-p1 flex flex-col gap-8"
                >
                  {Error && <div style={{ color: "tomato" }}>{Error}</div>}
                  <label className="flex flex-col text-p1">
                    <span className="text-p1 font-medium mb-4">Your Name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className="bg-tertiary py-4 px-6 bg-white placeholder:text-secondary text-p1 rounded-lg outline-none border-none font-medium"
                    />
                  </label>
                  <label className="flex flex-col text-p1">
                    <span className="text-p1 font-medium mb-4">Your email</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your web address?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary bg-white text-p1 rounded-lg outline-none border-none font-medium"
                    />
                  </label>
                  <label className="flex flex-col text-p1">
                    <span className="text-p1 font-medium mb-4">Your Message</span>
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What you want to say?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary bg-white  text-black rounded-lg outline-none border-none font-medium"
                    />
                  </label>

                  <button
                    type="submit"
                    className="bg-p5 py-1.5 px-10 rounded-xl outline-none w-fit text-s1 font-bold shadow-md shadow-primary"
                  >
                    {loading ? "Sending..." : "Send"}
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
