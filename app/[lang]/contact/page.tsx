import React from 'react';
import Footer from '@/components/footer';
import PageBanner from '@/components/pagebanner'; 
import GoogleMap from '@/components/google-map';
import ContactForm from '@/components/contact form';
import Head from "next/head";
import "/node_modules/flag-icons/css/flag-icons.min.css";


const Contact = () => {
    return (
        <div>

            <Head>
                <title>Contact Us</title>
                <meta name='Ariadne - Contact Us' content='Ariadne - Contact Us' />
            </Head>

            <PageBanner pageTitle="Contact Us" />

            <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
            <div className="w-full shrink-0 grow-0 basis-auto ">
                <div className="flex justify-between">
                <div className="w-1/2">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                    <div className='fi fi-de'></div>
                                </div>
                            </div>

                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                HQ | Munich, Germany
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                Ariadne Maps GmbH,
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                Brecherspitzstr. 8, 81541
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                Munich, Germany    
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                    <div className='fi fi-gr'></div>
                                </div>
                            </div>

                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                Veria, Greece
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                Ariadne Maps Hellas IKE,
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                16<sup>th</sup> Octovriou 1,
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                    59132, Veria, Greece
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                    <div className='fi fi-us'></div>
                                </div>
                            </div>

                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                Delaware, USA
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                Ariadne Maps Inc,
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                2150 Shattuck Ave., Berkeley,
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                CA 94704, United States
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                    <div className='fi fi-sg'></div>
                                </div>
                            </div>

                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold dark:text-white">
                                Singapore
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                Ariadne Maps Pte. Ltd.
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                68, Circular Road, #02-01,
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-200">
                                049422, Singapore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                <ContactForm />
                </div>   
                </div>

            </div>
            </section>
            </div>

            <GoogleMap />
           
            <Footer />
        </div>
    );
};

export default Contact;