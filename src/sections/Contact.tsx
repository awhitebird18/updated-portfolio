import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import fullAvatar from "../assets/fullAvatar.png";
import blur from "../assets/backgroundBlur.svg";

import { SiBitbucket, SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/Input";
import { useToast } from "@/components/ui/use-toast";

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string(),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof contactSchema>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Contact = ({ sectionRef }: { sectionRef: any }) => {
  const { toast } = useToast();
  const { resetField, reset } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps
  const submitHandler = (event: any) => {
    event.preventDefault();

    const myForm = event.target;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData = new FormData(myForm) as any;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        toast({ title: "Success" });
        resetField("email");
      })
      .catch(() => {
        toast({ title: "Error" });
      });

    reset();
  };

  useEffect(() => {
    document.querySelector("form")?.addEventListener("submit", submitHandler);
  }, [submitHandler]);

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="flex flex-col w-full items-center relative overflow-hidden bg-black"
    >
      <div className="flex flex-col gap-6 w-full items-center px-8 md:px-16 py-24 max-w-6xl">
        <div className="flex flex-col gap-10 items-center justify-between w-full z-10">
          <div className="justify-start flex flex-col items-start w-full">
            <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500 leading-normal">
              Contact
            </h1>
            <p className="text-5xl font-bold text-white">Send me a message below.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center md:  gap-10">
            <div className="lg:w-2/5 flex lg:block w-full items-center">
              <img src={fullAvatar} className="mb-8 w-28 lg:w-full" />
              <div className="flex gap-4">
                <a href="https://github.com/awhitebird18" target="_blank" className="lg:w-44">
                  <Button
                    variant="outline"
                    className="flex gap-2 items-center p-6 lg:p-3"
                    size="sm"
                  >
                    <SiGithub size={28} /> <span className="hidden lg:inline">Github</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/aaron-whitebird"
                  target="_blank"
                  className="lg:w-44"
                >
                  <Button
                    variant="outline"
                    className="flex gap-2 items-center p-6 lg:p-3"
                    size="sm"
                  >
                    <SiLinkedin size={28} />
                    <span className="hidden lg:inline ">linkedIn</span>
                  </Button>
                </a>
                <a
                  href="https://bitbucket.org/awhitebird-personal/workspace/repositories/"
                  target="_blank"
                  className="lg:w-44"
                >
                  <Button
                    variant="outline"
                    className="flex gap-2 items-center p-6 lg:p-3"
                    size="sm"
                  >
                    <SiBitbucket size={28} />
                    <span className="hidden lg:inline">BitBucket</span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative w-full lg:w-3/5 ">
              <img src={blur} className="-top-20 -right-32 absolute z-0 lg:w-96 h-96 opacity-50" />

              <form
                className="flex flex-col gap-6 h-full justify-between bg-zinc-900/70 p-8 rounded-lg shadow-lg max-w-2xl z-10 relative"
                // onSubmit={submitHandler}
                data-netlify="true"
                name="contact"
                method="POST"
                id="contact-form"
                action="/"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl text-white font-bold">Aaron Whitebird</h3>
                  <h4 className="text-xl text-slate-400">Full Stack Developer</h4>
                  <p className="text-white">
                    Send me an email with the fields below and I will get be sure to be back to you
                    shortly!
                  </p>
                </div>

                <p>
                  <label>
                    Your Name: <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Your Email: <input type="email" name="email" />
                  </label>
                </p>
                {/* <Input
                  className="border p-2 rounded bg-transparent text-white placeholder:text-slate-400"
                  name="name"
                  placeholder="Name"
                  {...register}
                />
                {formState.errors.name && (
                  <span className="text-red-600">{formState.errors.name.message}</span>
                )}

                <Input
                  className="border p-2 rounded bg-transparent text-white placeholder:text-slate-400 "
                  name="email"
                  type="email"
                  placeholder="Email"
                  {...register}
                />
                {formState.errors.email && (
                  <span className="text-red-600">{formState.errors.email?.message}</span>
                )} */}

                {/* <Input
                  className="border p-2 rounded bg-transparent text-white placeholder:text-slate-400"
                  name="subject"
                  placeholder="Subject"
                  {...register}
                />
                {formState.errors.subject && (
                  <span className="text-red-600">{formState.errors.subject.message}</span>
                )}

                <Input
                  className="border p-2 rounded bg-transparent text-white placeholder:text-slate-400"
                  name="message"
                  placeholder="Message"
                  {...register}
                />

                {formState.errors.message && (
                  <span className="text-red-600">{formState.errors.message.message}</span>
                )} */}

                <p>
                  <button type="submit">Send</button>
                </p>

                {/* <div className="flex flex-col gap-2">
                  <Button type="submit" className="text-white rounded">
                    Send
                  </Button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full flex justify-center p-6 text-slate-500 border-t border-slate-900 max-w-2xl">
        Copyright © 2023 | Whitebird Web Designs | All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;

// className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
