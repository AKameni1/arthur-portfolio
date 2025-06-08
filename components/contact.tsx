"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { sendEmail } from "@/lib/actions/send-email";
import { useRef } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";
import { contactSchema } from "@/lib/validations";

function EmailLink({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <a href="mailto:arthur.kamenitchualeu@gmail.com" className="underline">
      {children}
    </a>
  );
}

export default function Contact() {
  const t = useTranslations();
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  async function handleSubmit(formData: FormData) {
    // Client-side validation
    const values = {
      senderName: formData.get("senderName") as string,
      senderEmail: formData.get("senderEmail") as string,
      message: formData.get("message") as string,
    };
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      result.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }
    const { error } = await sendEmail(formData);
    if (error as string) {
      toast.error(error);
      return;
    }
    toast.success("Email sent successfully!");
    formRef.current?.reset();
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-3xl">
        <h3 className="mb-6 pl-6 text-2xl font-bold tracking-tight text-neutral-800 md:text-3xl dark:text-white">
          {t("ContactMe.title")}
        </h3>
        <p className="mt-2 pl-6 text-neutral-700 dark:text-white/80">
          {t.rich("SendDirectEmail", {
            email: (chunks: React.ReactNode) => <EmailLink>{chunks}</EmailLink>,
          })}
        </p>
        <form
          ref={formRef}
          action={handleSubmit}
          className="flex flex-col gap-4 rounded-lg p-6"
        >
          <input
            type="text"
            name="senderName"
            required
            maxLength={500}
            className="dark:bg-opacity-80 dark:focus:bg-opacity-100 h-14 rounded-lg border border-black/10 px-4 shadow-[var(--shadow-aceternity)] transition-all outline-none dark:bg-zinc-800"
            placeholder={t("ContactMe.name")}
          />
          <input
            type="email"
            name="senderEmail"
            required
            maxLength={500}
            className="dark:bg-opacity-80 dark:focus:bg-opacity-100 h-14 rounded-lg border border-black/10 px-4 shadow-[var(--shadow-aceternity)] transition-all outline-none dark:bg-zinc-800"
            placeholder={t("ContactMe.email")}
          />
          <textarea
            className="dark:bg-opacity-80 dark:focus:bg-opacity-100 my-3 h-52 max-h-72 min-h-52 resize-y rounded-lg border border-black/10 p-4 shadow-[var(--shadow-aceternity)] transition-all outline-none dark:bg-zinc-800"
            name="message"
            minLength={10}
            required
            maxLength={5000}
            rows={5}
            placeholder={t("ContactMe.message")}
          />
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="submit"
              className="group disabled:bg-opacity-65 dark:bg-opacity-10 flex h-[3rem] w-[8rem] cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 text-neutral-100 transition-all outline-none hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 dark:bg-zinc-800"
              disabled={pending}
            >
              {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              ) : (
                <>
                  {t("ContactMe.send")}{" "}
                  <Send
                    size={16}
                    className="text-xs opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
