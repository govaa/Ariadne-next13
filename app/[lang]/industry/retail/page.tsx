import Image from 'next/image';

const RetailPage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image 
        src="/images/industry/retail/retail banner.png"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute flex space-x-4 right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 p-10 h-64 mx-auto max-w-xl bg-yellow-500 shadow-2xl overflow-auto sm:space-x-0 ">
        <h1 className="text-white font-gothambook font-bold lg:text-xl">
          Ariadne revolutionizes retail with real-time shopper analytics, enhancing store layout, driving conversions, and elevating customer engagement. From actionable customer insights to intelligent workforce management, Ariadne is the compass navigating your retail store into the future.
        </h1>
      </div>
    </div>
  );
};

export default RetailPage;

