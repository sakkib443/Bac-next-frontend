import React from "react";

const PaymentMethod = () => {
  return (
    <div>
      <div className="crd">
        <div>
          <h2 className="text-center outfit text-4xl mb-4 crd">
            Our Payment Method
          </h2>
        </div>
        <div className="flex  flex-col md:flex-row items-center justify-center md:gap-18 gap-6 mb-6 ">
          <div className="flex flex-col items-center border border-gray-200 px-12 py-8 rounded-md">
            <img
              src="/images/bkash.webp"
              alt="Bkash Logo"
              className="w-16   object-contain"
            />
            <h3 className="work text-2xl">01321231808</h3>
          </div>
          <div className="flex flex-col items-center border border-gray-200 px-12 py-8 rounded-md">
            <img
              src="/images/nagad.png"
              alt="Nagad Logo"
              className="w-16   object-contain"
            />
            <h3 className="work text-2xl">01992079607</h3>
          </div>
          <div className="flex flex-col items-center border border-gray-200 px-12 py-8 rounded-md">
            <img
              src="/images/rocket.png"
              alt="Rocket Logo"
              className="w-16 aspect-[4/3] object-contain"
            />
            <h3 className="work text-2xl">01321231808</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
