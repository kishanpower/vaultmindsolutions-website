import FAQ from "../sections/contact/FAQ";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Headset,
  Sparkles,
} from "lucide-react";

export default function Contact() {

  const SERVICE_ID = "servicevms";
  const TEMPLATE_ID = "templatevms";
  const PUBLIC_KEY = "gYciqVfVZBIooM9yM";

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.service ||
        !formData.budget ||
        !formData.timeline ||
        !formData.message
      ) {
      toast.error(
        "Please fill all required fields"
      );
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );

      toast.success(
        "Message sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-40 text-white">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              backdrop-blur-md
            "
          >
            <Sparkles size={16} />
            Let's Connect
          </div>

          <h1
            className="
              mx-auto
              mt-8
              max-w-5xl
              text-5xl
              font-bold
              leading-tight
              md:text-6xl
            "
          >
            Let's Build Something
            Amazing Together
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Whether you need custom software,
            AI-powered solutions, automation or
            enterprise applications, our team is
            ready to help transform your vision
            into reality.
          </p>

        </div>
      </section>

      {/* CONTACT CARDS */}

      <section className="-mt-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-3">

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <Mail
                size={40}
                className="mx-auto text-blue-600"
              />

              <h3 className="mt-5 text-xl font-bold">
                Email Us
              </h3>

              <p className="mt-3 text-slate-600">
                info@vaultmindsolutions.com
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <Phone
                size={40}
                className="mx-auto text-cyan-600"
              />

              <h3 className="mt-5 text-xl font-bold">
                Call Us
              </h3>

              <p className="mt-3 text-slate-600">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <MapPin
                size={40}
                className="mx-auto text-green-600"
              />

              <h3 className="mt-5 text-xl font-bold">
                Location
              </h3>

              <p className="mt-3 text-slate-600">
                India
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FORM */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                Send Us A Message
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                Tell us about your project and
                we'll get back to you shortly.
              </p>

              <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-6"
                >

                <div>
                  <label className="mb-2 block font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  />
                </div>
        
                <div>
                  <label className="mb-2 block font-medium">
                    Company Name
                  </label>

                  <input
                    type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Service Required *
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  >
                    <option value="">
                      Select Service
                    </option>

                    <option value="ERP Development">
                      ERP Development
                    </option>

                    <option value="CRM Software">
                      CRM Software
                    </option>

                    <option value="Custom Software">
                      Custom Software
                    </option>

                    <option value="AI Automation">
                      AI Automation
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>

                    <option value="Digital Transformation">
                      Digital Transformation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Budget Range *
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  >
                    <option value="">
                      Select Budget
                    </option>

                    <option value="Below ₹50,000">
                      Below ₹50,000
                    </option>

                    <option value="₹50,000 - ₹1 Lakh">
                      ₹50,000 - ₹1 Lakh
                    </option>

                    <option value="₹1 Lakh - ₹3 Lakh">
                      ₹1 Lakh - ₹3 Lakh
                    </option>

                    <option value="₹3 Lakh - ₹5 Lakh">
                      ₹3 Lakh - ₹5 Lakh
                    </option>

                    <option value="₹5 Lakh+">
                      ₹5 Lakh+
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Project Timeline *
                  </label>

                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  >
                    <option value="">
                      Select Timeline
                    </option>

                    <option value="Immediately">
                      Immediately
                    </option>

                    <option value="Within 1 Month">
                      Within 1 Month
                    </option>

                    <option value="1-3 Months">
                      1-3 Months
                    </option>

                    <option value="3-6 Months">
                      3-6 Months
                    </option>

                    <option value="Flexible">
                      Flexible
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Send Inquiry"}

                  <Send size={18} />
                </button>

              </form>
            </div>

            {/* WHY US */}

            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                Why Work With VaultMind?
              </h2>

              <div className="mt-10 space-y-6">

                {[
                  {
                    icon: ShieldCheck,
                    title: "Secure Solutions",
                    text: "Security-first development practices.",
                  },
                  {
                    icon: Clock3,
                    title: "Fast Response",
                    text: "Quick communication and project updates.",
                  },
                  {
                    icon: Headset,
                    title: "Long-Term Support",
                    text: "Reliable maintenance and enhancements.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        rounded-3xl
                        border
                        border-slate-200
                        p-6
                      "
                    >
                      <Icon
                        size={28}
                        className="text-blue-600"
                      />

                      <h3 className="mt-4 text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}

      <FAQ />

      {/* CTA */}

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div
            className="
              rounded-[40px]
              bg-gradient-to-r
              from-blue-700
              to-cyan-500
              px-10
              py-20
              text-center
              text-white
            "
          >
            <h2 className="text-5xl font-bold">
              Ready To Start Your Project?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Let's discuss your software,
              automation or AI initiative.
            </p>

            <button
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-8
                py-4
                font-semibold
                text-blue-700
              "
            >
              Book Strategy Call

              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

