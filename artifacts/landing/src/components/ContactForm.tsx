import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, Loader2 } from "lucide-react";
import { useSubmitContactForm } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import clsx from "clsx";

const formSchema = z.object({
  name: z.string().min(2, "Введите ваше имя"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().optional(),
  investorType: z.enum(["private", "hnwi", "fund", "other"], { required_error: "Выберите тип" }),
  investmentVolume: z.string().min(1, "Выберите объем"),
  message: z.string().optional(),
  requestType: z.enum(["invest", "presentation", "contact"], { required_error: "Выберите тип заявки" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const { mutate, isPending } = useSubmitContactForm({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Заявка успешно отправлена",
          description: "Наш менеджер свяжется с вами в ближайшее время.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Произошла ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.",
        });
      },
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      requestType: "invest",
      investorType: undefined,
      investmentVolume: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate({ data });
  };

  const currentRequestType = form.watch("requestType");

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          
          {/* Info Column */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Контакты
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display text-navy-900 mb-8"
            >
              Связаться с командой
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy-800/70 text-lg font-sans mb-12 leading-relaxed"
            >
              Мы открыты к диалогу и готовы предоставить детальную презентацию портфеля, ответить на вопросы и обсудить форматы сотрудничества.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-navy-900/10 group-hover:border-gold-500 transition-colors bg-white">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-sm text-navy-800/60 uppercase tracking-widest font-semibold mb-1">Телефон</div>
                  <a href="tel:+74951234567" className="text-xl font-display font-medium text-navy-900 hover:text-gold-600 transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-navy-900/10 group-hover:border-gold-500 transition-colors bg-white">
                  <Mail className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="text-sm text-navy-800/60 uppercase tracking-widest font-semibold mb-1">Email</div>
                  <a href="mailto:info@smart-devt.ru" className="text-xl font-display font-medium text-navy-900 hover:text-gold-600 transition-colors">
                    info@smart-devt.ru
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 shadow-xl shadow-navy-900/5 border border-border"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Radio Group styled beautifully */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-navy-900/60">Тема обращения *</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: "invest", label: "Инвестировать" },
                    { value: "presentation", label: "Презентация" },
                    { value: "contact", label: "Задать вопрос" }
                  ].map((opt) => (
                    <label 
                      key={opt.value}
                      className={clsx(
                        "block p-4 text-center cursor-pointer border transition-all duration-200 select-none",
                        currentRequestType === opt.value 
                          ? "border-gold-500 bg-gold-500/5 text-navy-900 font-medium" 
                          : "border-border/60 text-navy-800/70 hover:border-navy-900/30"
                      )}
                    >
                      <input 
                        type="radio" 
                        value={opt.value} 
                        className="hidden" 
                        {...form.register("requestType")} 
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {form.formState.errors.requestType && (
                  <p className="text-red-500 text-xs mt-1">{form.formState.errors.requestType.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy-900/60">Имя *</label>
                  <input 
                    {...form.register("name")}
                    className="w-full bg-transparent border-b border-navy-900/20 py-3 text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Иван Иванов"
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy-900/60">Email *</label>
                  <input 
                    {...form.register("email")}
                    className="w-full bg-transparent border-b border-navy-900/20 py-3 text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="ivan@example.com"
                  />
                  {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy-900/60">Телефон</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full bg-transparent border-b border-navy-900/20 py-3 text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy-900/60">Тип инвестора *</label>
                  <select 
                    {...form.register("investorType")}
                    defaultValue=""
                    className="w-full bg-transparent border-b border-navy-900/20 py-3 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled hidden>Выберите тип</option>
                    <option value="private">Частный инвестор</option>
                    <option value="hnwi">HNWI (от 50 млн ₽)</option>
                    <option value="fund">Институциональный фонд</option>
                    <option value="other">Другое</option>
                  </select>
                  {form.formState.errors.investorType && <p className="text-red-500 text-xs">{form.formState.errors.investorType.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-navy-900/60">Объём инвестиций *</label>
                <select 
                  {...form.register("investmentVolume")}
                  defaultValue=""
                  className="w-full bg-transparent border-b border-navy-900/20 py-3 text-navy-900 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Укажите планируемый объём</option>
                  <option value="5-50">5–50 млн руб.</option>
                  <option value="50-500">50–500 млн руб.</option>
                  <option value="500+">Более 500 млн руб.</option>
                </select>
                {form.formState.errors.investmentVolume && <p className="text-red-500 text-xs">{form.formState.errors.investmentVolume.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-navy-900/60">Сообщение (необязательно)</label>
                <textarea 
                  {...form.register("message")}
                  rows={3}
                  className="w-full bg-transparent border-b border-navy-900/20 py-3 text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  placeholder="Дополнительная информация или вопросы..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full py-4 bg-navy-900 text-white font-bold tracking-widest uppercase text-sm hover:bg-navy-800 hover:text-gold-500 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                {isPending ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
