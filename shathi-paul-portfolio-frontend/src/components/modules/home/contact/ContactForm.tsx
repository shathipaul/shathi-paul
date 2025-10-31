"use client";
import { Button_v4 } from "@/components/common/buttons/Button_v4";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("clicking");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      await res.json();

      if (res.status === 200) {
        console.log({ test: "Working" });
        toast.success(
          "Your mail has been sent successfully. We will contact with you soon"
        );
        // ✅ Reset form data here
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send mail. Please try again");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="relative z-30 w-full lg:w-1/2">
      <div className="my-3">
        <input
          className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div className="my-3">
        <input
          className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="my-3">
        <textarea
          className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Message"
          required
        />
      </div>
      {/* <Button_v4 type="submit">
        <div className="w-full py-3 px-4 rounded-2xl focus:outline-none font-semibold">
          {isLoading ? "Sending..." : "Submit"}
        </div>
      </Button_v4> */}
      <button
        className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-primary hover:bg-gold text-secondary font-semibold"
        type="submit"
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
