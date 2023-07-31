import React from 'react';
import Footer from '@/components/footer';
import PageBanner from '@/components/pagebanner'; 
import GoogleMap from '@/components/google-map';
import ContactForm from '@/components/contact form';
import Head from "next/head";


const Contact = () => {
    return (
        <div>

            <Head>
                <title>Contact Us</title>
                <meta name='Ariadne - Contact Us' content='Ariadne - Contact Us' />
            </Head>

            <PageBanner pageTitle="Contact Us" />

            <ContactForm />

            <GoogleMap />
           
            <Footer />
        </div>
    )
}

export default Contact;