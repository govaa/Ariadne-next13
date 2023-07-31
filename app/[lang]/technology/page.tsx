import React from 'react';
import MainNav from '@/components/main-nav';
import Footer from '@/components/footer';
import PageBanner from '@/components/pagebanner';
import Link from 'next/link';
import Head from "next/head";

const Technology = () => {

  return (
    <>
      <Head>
        <title>Technology
        </title>
        <meta name='description' content='Ariadne' />
      </Head>
      <MainNav />

      <PageBanner/>

      <div className="services-area-two pt-80 pb-50 bg-white">
        <div className="container pb-50">
          <div className="section-title">
            <h2>Technology</h2>
            <div className="bar"></div>
            <p>Technology</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icons/ariadne-analytics.png" alt="Ariadne Analytics" />
                </div>
                <h3>
                  <Link href="/technology/ariadne-analytics">
                    Ariadne Analytics
                  </Link>
                </h3>
                <p>Tech Ariadne</p>
                <Link href="/technology/ariadne-analytics">
                Ariadne Analytics
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icons/ariadne-navigation.png" alt="Ariadne Navigation" />
                </div>
                <h3>
                  <Link href="/technology/ariadne-navigation">
                  </Link>
                </h3>
                <p>Ariadne Navigation</p>
                <Link href="/technology/ariadne-navigation">
                  Ariadne Nabigation
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icons/ariadne-engagement.png" alt="Ariadne Engagement" />
                </div>
                <h3>
                  <Link href="/technology/ariadne-engagement">
                    Ariadne Engagement
                  </Link>
                </h3>
                <p>Ariadne Engagement</p>
                <Link href="/technology/ariadne-engagement">
                  Ariadne Engagement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Technology;
