"use client"
import React, { useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Locale } from "next/dist/compiled/@vercel/og/satori";

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

  const onChangeForm = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Success = () => {
    return (
      <div className='border rounded-md h-2/4 transition-all'>
        <h2>Get In Touch With Us</h2>
      </div>
    );
  };
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    console.log("form ", form.current);
    if (EmailValidator.validate(formData.user_email)) setEmailValid(" ");
    else setEmailValid("Invalid email"); // true

    emailjs
      .sendForm(
        "service_sz5fwrj",
        "template_bo5pqb9",
        form.current!,
        "5XnEP5pWWhSJWW48B"
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
  };

  return (
    <div className='contact-area ptb-80'>
      <div className='container'>
        <div className='section-title'>
          <h2>Get In Touch With Us</h2>
          <div className='bar'></div>
          <p>Anything On your Mind. We'll Be Glad To Assist You!</p>
        </div>

        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12'>
            Insert Contact Info
          </div>

          <div className='col-lg-6 col-md-12'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='user_name'
                      placeholder="Full Name"
                      className='form-control'
                      value={formData.user_name}
                      onChange={onChangeForm}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='user_email'
                      placeholder="Email address"
                      className='form-control'
                      value={formData.user_email}
                      onChange={onChangeForm}
                      required
                    />
                    {!isEmailValid && <div>{isEmailValid}</div>}
                    </div>
                </div>

                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="user_tel" 
                                            placeholder="Your phone number" 
                                            className="form-control" 
                                            value={formData.user_tel}
                                            onChange={onChangeForm}
                                        />
                                    </div>
                        </div> */}

                <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                    <input
                        type='text'
                        name='subject'
                        placeholder="Subject (Optional)"
                        className='form-control'
                        value={formData.subject}
                        onChange={onChangeForm}
                    />
                    </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                    <textarea
                        name='message'
                        cols={30}
                        rows={5}
                        placeholder="Your Message..."
                        className='form-control'
                        value={formData.message}
                        onChange={onChangeForm}
                    />
                    </div>

                    <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                    />
                    <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault'
                    >
                    By submitting this form, you agree to our
                        <Link href='/imprint'>Terms</Link>" ""and"" "
                        <Link href='/privacy-policy'>"Privacy Policy"</Link>
                        .
                    </label>
                    {isSent && (
                        <div className='pt-4 pb-4 text-success'>
                        "Thank you for your message. Our team will contact you shortly."
                        </div>
                    )}
                    </div>
                </div>

                <div className='col-lg-12 col-sm-12'>
                    <button
                    className='btn btn-primary'
                    disabled={loading}
                    type='submit'
                    >
                    Send Message
                    </button>
                </div>
                </div>
                </form>
                </div>
                </div>
        </div>
    </div>
                );
                };

export default ContactForm;
