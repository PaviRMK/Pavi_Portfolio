import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, Phone, Github, Linkedin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import ParticleBackground from "@/components/ParticleBackground";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pavithraas2312@gmail.com",
    href: "mailto:pavithraas2312@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8825467970",
    href: "tel:+918825467970",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/PaviRMK" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pavithraa23/" },
];

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    try {

      await emailjs.sendForm(
        "service_za85408",       // service id
        "template_ihs6dcn",     // template id
        form.current,
        "3kP_jqRjmNx3OrtKO"     // public key
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.current.reset();

    } catch (error) {

      console.error("EmailJS error:", error);

      toast({
        title: "Error sending message",
        description: "Please try again later.",
      });

      setIsSubmitting(false);
    }

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen relative pt-24 pb-16">

        <ParticleBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind? Let's work together."
          />

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="glass rounded-2xl p-8">

                <h3 className="font-display text-xl font-bold mb-6">
                  Send a Message
                </h3>

                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid sm:grid-cols-2 gap-4">

                    <Input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                    />

                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                    />

                  </div>

                  <Input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />

                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting || isSubmitted}
                  >

                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent
                      </>
                    ) : isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}

                  </Button>

                </form>

              </div>

            </motion.div>

            {/* Contact Info */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >

              <div className="glass rounded-2xl p-8">

                <h3 className="font-display text-xl font-bold mb-6">
                  Contact Info
                </h3>

                <div className="space-y-4">

                  {contactInfo.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >

                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>

                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>

                        <a
                          href={item.href}
                          className="font-medium hover:text-primary"
                        >
                          {item.value}
                        </a>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* Social Links */}

              <div className="glass rounded-2xl p-8">

                <h3 className="font-display text-xl font-bold mb-6">
                  Connect With Me
                </h3>

                <div className="flex gap-4">

                  {socialLinks.map((link) => (

                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
};

export default Contact;