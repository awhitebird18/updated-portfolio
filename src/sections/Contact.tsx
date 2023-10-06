import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { v4 as uuid } from "uuid";
import axios from "axios";
import dayjs from "dayjs";
import { SiBitbucket, SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Editor from "@/components/message-input/MessageEditor";
import { useToast } from "@/components/ui/use-toast";
import bird from "@/assets/bird.svg";
import { editorConfig } from "@/components/message-input/editorConfig";
import FadeInContainer from "@/components/layout/FadeInContainer";

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string(),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const { register, handleSubmit, formState } = useForm<FormData>({
    // resolver: zodResolver(contactSchema),
  });

  const submitHandler = async () => {
    const messageData = {
      content: message,
      channelId: "b23bef4b-a74a-469f-860b-cf7b4fdeaea6",
      userId: "5633c9b9-b914-4732-80db-3ceb25182aae",
      uuid: uuid(),
      createdAt: dayjs(),
    };

    try {
      await axios.post("https://api.spa-rx.ca:3000/messages", messageData);

      toast({
        title: "Message Sent!",
        description: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please send an email to aaron.whitebird@gmail.com",
      });
    }
  };

  const handleChange = (message: string) => {
    setMessage(message);
  };

  return (
    <FadeInContainer duration={1000}>
      <div className="h-screen flex flex-col gap-10 w-full relative overflow-hidden py-16 pb-24 px-8 lg:p-16 lg:px-44">
        <div className="flex  flex-col relative w-full my-10">
          <div className="absolute border-b-2 border-dashed border-slate-900 w-screen fade-border-horizontal" />
          <div className="w-20 h-20 p-4 rounded-full bg-black border-dashed border-2 right-1/2 translate-x-10 absolute border-slate-900 -top-10 lg:-top-10 overflow-hidden">
            <img src={bird} className="h-full w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-8 flex-1 items-center justify-around">
          <h1 className="text-4xl text-center leading-normal">
            Intested to learn more? Send me a message below
          </h1>

          <div
            className="flex flex-col gap-6 w-full lg:w-3/4 h-3/4"
            onSubmit={handleSubmit(submitHandler)}
          >
            <Input className="border p-2 rounded" name="name" placeholder="Name" {...register} />
            {formState.errors.name && (
              <span className="text-red-600">{formState.errors.name.message}</span>
            )}

            <Input
              className="border p-2 rounded"
              name="email"
              type="email"
              placeholder="Email"
              {...register}
            />
            {formState.errors.email && (
              <span className="text-red-600">{formState.errors.email?.message}</span>
            )}

            <Input
              className="border p-2 rounded"
              name="subject"
              placeholder="Subject"
              {...register}
            />
            {formState.errors.subject && (
              <span className="text-red-600">{formState.errors.subject.message}</span>
            )}

            <Editor
              config={editorConfig}
              onChange={handleChange}
              placeholder="Send me a message!"
              onSubmit={() => {}}
            />
            {formState.errors.message && (
              <span className="text-red-600">{formState.errors.message.message}</span>
            )}

            <div className="flex flex-col gap-2">
              <Button onClick={submitHandler} className="bg-blue-500 text-white rounded px-4 py-2">
                Send
              </Button>

              <p className="text-right">Powered by Sparx Chat</p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center gap-2">
          <h4 className="text-xl text-slate-400 flex-1">Fly, high, & level up.</h4>
          <div className="flex gap-6 w-min">
            <Button variant="ghost" className="flex gap-4 items-center p-4 py-8 justify-start">
              <SiGithub size={28} />
            </Button>
            <Button variant="ghost" className="flex gap-4 items-center p-4 py-8 justify-start">
              <SiLinkedin size={28} />
            </Button>
            <Button variant="ghost" className="flex gap-4 items-center p-4 py-8 justify-start">
              <SiBitbucket size={28} />
            </Button>
          </div>
        </div>
      </div>
    </FadeInContainer>
  );
};

export default Contact;
