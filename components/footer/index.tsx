"use client"
import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Facebook,
  MapPin,
  Mail,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import EmailNewsletter from "@/components/email-newsletter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {


  useEffect(() => {
  }, []);

  return (
    <footer className='footer-area bg-f7fafd'>
      <div className='container'>
        <div className='row'>

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <div className='logo'>
                <Link href='/technology'>
                  <a>
                    <img src='/images/logo/ariadne-long-logo.png' alt='logo' width='80%' />
                  </a>
                </Link>
              </div>
              {/* <p>Ariadne is the operating system of commercial real estates that provides advanced, real-time customer analytics enabled with award winning accuracy and certified privacy compliance.</p> */}
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget pl-5'>
              <h3>Technology</h3>
              <ul className='list'>
                <li>
                  <Link href='/technology'>
                    <a>Technology</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>Solutions</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>Industries</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <h3>Company</h3>
              <ul className='list'>
                <li>
                  <Link href='/technology'>
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>Imprint</a>
                  </Link>
                </li>
                <li>
                  <Link href='/technology'>
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='single-footer-widget'>
              <h3>Address</h3>

              <ul className='footer-contact-info'>
                <li>
                  <MapPin />
                  Brecherspitzstr. 8, 81541 <br /> Munich, Germany
                </li>
                <li>
                  <Mail />
                  <h3>E-mail</h3>
                  <a href='mailto:contact@ariadne.inc'></a>
                </li>
                <li>
                  <h3>Phone</h3> <a href='tel:491744079675'></a>
                </li>
              </ul>
              <ul className='social-links'>
                <li>
                  <a
                    href='https://www.facebook.com/ariadnemaps/'
                    className='facebook'
                    target='_blank'
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/ariadne_maps'
                    className='twitter'
                    target='_blank'
                  >
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/user/pipelidisg/'
                    className='instagram'
                    target='_blank'
                  >
                    <Youtube />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/company/ariadne-maps/'
                    className='linkedin'
                    target='_blank'
                  >
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-12 col-md-12'>
            <div className='copyright-area'>
              <p>
                Copyright: Ariadne. Copyright © 2023 Ariadne. All rights reserved by Ariadne Maps GmbH
                <a href='https://ariadne.inc/' target='_blank'>
                  Ariadne Maps GmbH
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src='/images/logo/ariadne-long-logo.png' className='map' alt='map' />

      {/* Shape Images */}
      <div className='shape1'>
        <img src='/images/logo/ariadne-long-logo.png' alt='shape' />
      </div>
      <div className='shape8 rotateme'>
        <img src='/images/logo/ariadne-long-logo.png' alt='shape' />
      </div>
    </footer>
  );
};

export default Footer;
