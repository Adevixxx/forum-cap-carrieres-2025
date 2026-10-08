import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  const labels = t("contact.form.labels", { returnObjects: true });
  const placeholders = t("contact.form.placeholders", { returnObjects: true });

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t("contact.title")}
          sub={t("contact.subtitle")}
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{labels.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={placeholders.name}
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">{labels.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={placeholders.email}
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">{labels.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={placeholders.message}
                    rows="5"
                    required
                    autoComplete="off"
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading
                        ? t("contact.form.button.loading")
                        : t("contact.form.button.default")}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

                {status && (
                  <p
                    role="status"
                    className={
                      status === "success" ? "text-green-700" : "text-red-600"
                    }
                  >
                    {t(`contact.form.status.${status}`)}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* ----- BLOC MODIFIÉ CI-DESSOUS ----- */}

          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <iframe 
                className="w-full h-full border-0"
                loading="lazy" 
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.120585840319!2d-4.5703774!3d48.358206499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816be39dac601ad%3A0x271a5b153615b2ad!2sIMT%20Atlantique!5e0!3m2!1sfr!2sfr!4v1761052687997!5m2!1sfr!2sfr" 
                title="IMT Atlantique - Campus de Brest"
                
              >
              </iframe>
            </div>
          </div>

          {/* ----- FIN DU BLOC MODIFIÉ ----- */}

        </div>
      </div>
    </section>
  );
};

export default Contact;