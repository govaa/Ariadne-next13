"use client"
import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setSend] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_tel: "",
    subject: "",
    message: "",
  });

  const [isEmailValid, setEmailValid] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    setLoading(true);

    if (EmailValidator.validate(formData.user_email)) setEmailValid(" ");
    else setEmailValid("Invalid email");

    useEffect(() => {
      if (!form.current) {
        return;
      }
      emailjs
        .sendForm(
          "service_sz5fwrj",
          "template_bo5pqb9",
          form.current!,
          "96v-bw7VBqVWwzkJ2"
        )
        .then(
          (result) => {
            console.log(result?.text);
            console.log("message sent");
            setSend(true);
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }, [form]);
  };

return (
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-12 text-3xl font-bold">Get In Touch With Us</h2>
          <h5 className="mb-12 text-xl">Anything On your Mind. We'll Be Glad To Assist You!</h5>
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={onChange}
                  required
                  className="peer block min-h-[auto] w-full rounded-full border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Full Name" />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor ="user_name">
                    Full Name
                </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                name="user_email"
                value={formData.user_email}
                onChange={onChange}
                required
                className="peer block min-h-[auto] w-full rounded-full border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Email address" />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                htmlFor="user_email">
                Email address
              </label>
              {!isEmailValid && <div className='text-danger'>{isEmailValid}</div>}
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                name="subjectl"
                value={formData.subject}
                onChange={onChange}
                required
                className="peer block min-h-[auto] w-full rounded-full border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="subject" />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                htmlFor="subject">
                Subject (Optional)
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded-lg border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                rows={5}
                cols={30}
                placeholder="Your message..."
                name='message'
                value={formData.message}
                onChange={onChange} 
                >
              </textarea>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Your Message
              </label>
            </div>

            <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                name="flexCheckDefault"
                 />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="flexCheckDefault">
                By submitting this form, you agree to our
                <Link href='/imprint'> Terms</Link> and 
                <Link href='/privacy-policy'> Privacy Policy</Link>
                .
              </label>
            </div>

            {isSent && (
              <div className='pt-4 pb-4 text-success'>
                "Thank you for your message. Our team will contact you shortly."
              </div>
            )}

            <button type="submit" className="py-3 px-5 w-full text-2xl font-gothamlight text-center text-white rounded-full border cursor-pointer bg-ariadneblue border-primary-600 sm:rounded-full hover:bg-primary-800 focus:ring-2 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
              disabled={loading}>Submit</button>
          </form>
        </div>
);
};

export default ContactForm;

