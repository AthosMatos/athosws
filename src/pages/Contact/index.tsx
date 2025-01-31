import { useATHOSToast } from "@athosws/react-components";
import { animate, AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Card = ({
  icon,
  label,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  link?: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <a
        href={link}
        target="_blank"
        style={{
          backgroundColor: "rgb(48, 48, 48)",
        }}
        className={`flex w-fit h-fit flex-col 
      gap-3 items-center border border-gray-400 p-3 rounded-xl
      ${link ? "transition-all hover:scale-105 cursor-pointer" : ""}`}
      >
        {icon}
      </a>
      <p
        style={{
          fontSize: "1rem",
        }}
      >
        {label}
      </p>
    </div>
  );
};

const Input = ({
  placeholder,
  value,
  onChange,
  textArea,
}: {
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  textArea?: boolean;
}) => {
  const props = {
    onChange,
    placeholder,
    value,
    style: {
      borderColor: "rgb(83, 83, 83)",
      borderWidth: 1,
    },
    whileFocus: {
      borderColor: "rgb(201, 38, 160)",
    },
    className: `outline-none rounded-md p-2 text-lg ${textArea ? "" : "h-10 "}`,
  };
  return textArea ? (
    <motion.textarea {...props} />
  ) : (
    <motion.input {...props} />
  );
};

const Toast = ({ form }: { form: any }) => {
  const [emailSent, setEmailSent] = useState(false);
  const id = `toast ${Date.now().toString()}`;
  useEffect(() => {
    const box = document.getElementById(id);

    if (!box) return;
    const anim = animate(
      box,
      { scale: 1.2 },
      { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
    );
    setTimeout(() => {
      setEmailSent(true);
      anim.stop();
    }, 800);
  }, []);
  const duration = 0.35;
  return (
    <motion.div
      style={{
        backgroundColor: "rgba(48, 48, 48, 0.98)",
      }}
      initial={{ width: "12rem" }}
      animate={{ width: emailSent ? "22rem" : "12rem" }}
      className="p-3 rounded-lg flex text-white items-center gap-2 h-16 border border-pink-500"
      transition={{ duration }}
    >
      <motion.div
        id={id}
        className={`w-4 h-4 ${
          emailSent ? "bg-green-600" : "bg-yellow-600"
        } rounded-full`}
      />
      <AnimatePresence mode="wait">
        <motion.p
          key={emailSent ? 1 : 2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          className="text-base"
        >
          {emailSent
            ? `I'll get back to you as soon as possible`
            : "Sending Email"}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

const allOptFilled = (form: any) => {
  let filled = true;
  for (const key in form) {
    if (!form[key]) {
      filled = false;
      break;
    }
  }
  return filled;
};
const Contact = () => {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const clearForm = () => {
    setForm({
      subject: "",
      email: "",
      message: "",
    });
  };
  const { toast } = useATHOSToast();
  const onSend = () => {
    if (!allOptFilled(form)) {
      return;
    }
    toast(<Toast form={form} />, {
      position: "top-right",
    });
    clearForm();
  };
  return (
    <div className="flex gap-12 text-white p-4 h-full items-center">
      <div className="flex flex-col gap-4">
        <p className="text-xl">My Socials</p>
        <div className="flex text-3xl gap-3 flex-col w-fit">
          <Card
            link="https://github.com/AthosMatos"
            icon={<FaGithub />}
            label="AthosMatos"
          />
          <Card
            link="https://www.linkedin.com/in/athosmatos/"
            icon={<FaLinkedin />}
            label="Athos Matos"
          />
          <Card icon={<IoMdMail />} label="ladiesman217.as@gmail.com" />
        </div>
      </div>

      {/*   <div className="flex flex-col gap-4 w-full">
        <p className="text-xl">Wanna Chat, send me a email</p>
        <div className="flex flex-col gap-4 w-full ">
          <Input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            textArea
          />
        </div>
        <button
          onClick={onSend}
          className="bg-pink-500 w-fit px-5 py-2 rounded-full hover:scale-105
         active:scale-100 cursor-pointer transition-all self-end
         "
        >
          Send
        </button>
      </div> */}
    </div>
  );
};

export default Contact;
