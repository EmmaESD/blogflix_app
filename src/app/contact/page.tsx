"use client";
import { ChangeEvent, JSX, useState } from "react";
import connectAirtable from "../utils/connectAirtable";

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    const base = connectAirtable();
    const TABLE_name = "contacts";
    const table = base(TABLE_name);
    const newContact = {
      fields: {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        message: formData.message,
      },
    };

    table.create([newContact], (err, records) => {
      if (err) {
        console.error("Erreur lors de la création du contact :", err);
        setSubmissionStatus("error");
        return;
      }

      if (!records) {
        setSubmissionStatus("error");
        return;
      }

      setSubmissionStatus("success");
      console.log("Contact créé et email envoyé via Airtable Automations");
    });
  };

  return (
    <section className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-5">
          <div className="w-full">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              Prénom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md py-2 px-3 text-bgDark"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Doe"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="mt-1 w-full text-bgDark rounded-md  py-2 px-3 "
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md py-2 px-3 text-bgDark"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md py-2 px-3 text-bgDark"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-main px-3 py-1 rounded-md"
            disabled={submissionStatus === "submitting"}
          >
            {submissionStatus === "submitting"
              ? "Envoi en cours..."
              : "Envoyer"}
          </button>
        </div>
        {submissionStatus === "success" && (
          <p className="text-green-500 text-center">
            Votre message a été envoyé avec succès !
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-red-500 text-center">
            Une erreur s'est produite lors de l'envoi de votre message.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
