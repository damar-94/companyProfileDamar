import { VscCircleLargeFilled } from "react-icons/vsc";
import { IoMdSend } from "react-icons/io";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#1E293B] flex justify-center bg-">
        <section
          id="contact"
          className=" flex flex-col font-Inter md:h-screen justify-center items-center"
        >
          <article className="flex items-center">
            <h1 className="text-[#EAB308] px-2 text-[10px]">
              <VscCircleLargeFilled />
            </h1>
            <h1 className="text-[#FAFAFF] font-medium text-[28px] py-8 md:text-[52px]">
              CONTACT
            </h1>
            <h1 className="text-[#EAB308] px-2 text-[10px]">
              <VscCircleLargeFilled />
            </h1>
          </article>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 text-white  py-4">
            <article className="border-4 rounded-2xl shadow-xl w-auto ">
              <div className="py-4 px-4">
                <p className="text-[24px] font-bold">Connect with Us!</p>
                <div className="pt-10">
                  <h1 className="font-bold text-[16px] text-[#EAB308]">
                    Email
                  </h1>
                  <h1 className="font-light text-[16px]">
                    admin@ecabakery.com
                  </h1>
                  <h1 className="font-bold text-[16px] text-[#EAB308] mt-4">
                    Phone
                  </h1>
                  <h1 className="font-light text-[16px]">08123445678910</h1>
                </div>
              </div>
            </article>

            <form className="bg-[#FAFAFF] rounded-2xl shadow-xl flex flex-col items-center">
              <section className="p-4">
                <div className="flex flex-col">
                  <label className="text-[#3E403E]" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="your Name"
                    required
                    className="border border-[#3E403E] rounded-lg py-1 px-1 md:w-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#3E403E]" htmlFor="email">
                    Email
                  </label>
                  <input
                    placeholder="Email@mail.com"
                    type="email"
                    id="email"
                    required
                    className="border border-[#3E403E] rounded-lg  px-1 py-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#3E403E]" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    placeholder="How can I help you?"
                    id="message"
                    required
                    className="border border-[#3E403E] rounded-lg w-auto  px-1 py-1 h-30"
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-[#EAB308] px-4 py-2 rounded-xl mt-6 flex items-center text-center justify-center"
                >
                  Send Message
                  <span className="pl-4">
                    <IoMdSend />
                  </span>
                </button>
              </section>
            </form>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
