import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, Loader2, ArrowRight } from "lucide-react";
import { useSubmitContactForm } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

const makeSchema = (errors: { name: string; email: string; investorType: string; investmentVolume: string }) =>
  z.object({
    name: z.string().min(2, errors.name),
    email: z.string().email(errors.email),
    phone: z.string().optional(),
    investorType: z.enum(["private", "hnwi", "fund", "other"], { required_error: errors.investorType }),
    investmentVolume: z.string().min(1, errors.investmentVolume),
    message: z.string().optional(),
    requestType: z.enum(["invest", "presentation", "contact"]),
  });

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  investorType: "private" | "hnwi" | "fund" | "other";
  investmentVolume: string;
  message?: string;
  requestType: "invest" | "presentation" | "contact";
};

export function ContactForm() {
  const { t } = useLang();
  const c = t.contact;
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const schema = makeSchema(c.errors);

  const { mutate, isPending } = useSubmitContactForm({
    mutation: {
      onSuccess: () => setSubmitted(true),
      onError: () => {
        toast({ variant: "destructive", title: c.errorTitle, description: c.errorSub });
      },
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "", requestType: "invest", investorType: undefined as unknown as "private", investmentVolume: "" },
  });

  const currentRequestType = form.watch("requestType");

  const onSubmit = (data: FormValues) => mutate({ data });

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-px bg-accent-500" />
              <span className="text-accent-500 text-xs font-semibold tracking-[0.22em] uppercase">{c.tag}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-display text-navy-900 mb-6"
            >
              {c.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-base font-sans leading-relaxed mb-12"
            >
              {c.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { icon: Phone, label: c.phoneLabel, value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
                { icon: Mail, label: c.emailLabel, value: "info@smart-devt.ru", href: "mailto:info@smart-devt.ru" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-white border border-slate-200 flex items-center justify-center group-hover:border-accent-500 group-hover:bg-accent-500 transition-all">
                    <Icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 tracking-wide font-semibold mb-0.5">{label}</div>
                    <a href={href} className="text-navy-900 font-medium text-sm hover:text-accent-500 transition-colors">{value}</a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white border border-slate-100 shadow-sm p-12 flex flex-col items-center text-center h-full justify-center min-h-80">
                <div className="w-14 h-14 bg-accent-500 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-navy-900 mb-3">{c.successTitle}</h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-sm">{c.successSub}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs text-slate-400 hover:text-navy-900 transition-colors underline underline-offset-4"
                >
                  {c.successReset}
                </button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white border border-slate-100 shadow-sm p-5 sm:p-8 md:p-10 space-y-7">

                {/* Request type */}
                <div className="space-y-3">
                  <label className="text-xs font-semibold tracking-wide text-slate-400">{c.requestLabel}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {c.requestTypes.map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-center justify-center p-3 text-center cursor-pointer border text-xs font-medium tracking-wide transition-all duration-200 select-none ${
                          currentRequestType === opt.value
                            ? "border-accent-500 bg-accent-50 text-accent-600"
                            : "border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-600"
                        }`}
                      >
                        <input type="radio" value={opt.value} className="hidden" {...form.register("requestType")} />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold tracking-wide text-slate-400">{c.nameLabel}</label>
                    <input type="text" placeholder={c.namePlaceholder} {...form.register("name")}
                      className="w-full bg-transparent border-b border-slate-200 py-2.5 text-sm text-navy-900 placeholder:text-slate-300 focus:outline-none focus:border-accent-500 transition-colors" />
                    {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold tracking-wide text-slate-400">{c.emailFieldLabel}</label>
                    <input type="email" placeholder={c.emailPlaceholder} {...form.register("email")}
                      className="w-full bg-transparent border-b border-slate-200 py-2.5 text-sm text-navy-900 placeholder:text-slate-300 focus:outline-none focus:border-accent-500 transition-colors" />
                    {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                  </div>
                </div>

                {/* Phone + Investor type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold tracking-wide text-slate-400">{c.phoneFieldLabel}</label>
                    <input type="tel" placeholder={c.phonePlaceholder} {...form.register("phone")}
                      className="w-full bg-transparent border-b border-slate-200 py-2.5 text-sm text-navy-900 placeholder:text-slate-300 focus:outline-none focus:border-accent-500 transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold tracking-wide text-slate-400">{c.investorLabel}</label>
                    <select {...form.register("investorType")} defaultValue=""
                      className="w-full bg-transparent border-b border-slate-200 py-2.5 text-sm text-navy-900 focus:outline-none focus:border-accent-500 transition-colors appearance-none cursor-pointer">
                      <option value="" disabled hidden>{c.investorPlaceholder}</option>
                      {c.investorOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    {form.formState.errors.investorType && <p className="text-red-500 text-xs">{form.formState.errors.investorType.message}</p>}
                  </div>
                </div>

                {/* Volume */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold tracking-wide text-slate-400">{c.volumeLabel}</label>
                  <select {...form.register("investmentVolume")} defaultValue=""
                    className="w-full bg-transparent border-b border-slate-200 py-2.5 text-sm text-navy-900 focus:outline-none focus:border-accent-500 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled hidden>{c.volumePlaceholder}</option>
                    {c.volumeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  {form.formState.errors.investmentVolume && <p className="text-red-500 text-xs">{form.formState.errors.investmentVolume.message}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold tracking-wide text-slate-400">{c.messageLabel}</label>
                  <textarea {...form.register("message")} rows={3} placeholder={c.messagePlaceholder}
                    className="w-full bg-transparent border-b border-slate-200 py-2.5 text-sm text-navy-900 placeholder:text-slate-300 focus:outline-none focus:border-accent-500 transition-colors resize-none" />
                </div>

                {/* Submit */}
                <button type="submit" disabled={isPending}
                  className="group w-full flex items-center justify-between py-4 px-6 bg-navy-900 text-white text-sm font-semibold tracking-wide hover:bg-accent-500 transition-colors disabled:opacity-60">
                  <span className="flex items-center gap-2">
                    {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isPending ? c.submitPending : c.submitIdle}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
