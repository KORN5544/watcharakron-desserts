import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-[#E3D5CA] min-h-screen flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">ติดต่อ</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />

          <div className="text-lg text-gray-700 space-y-3">
            <p className="font-semibold text-xl text-black">
              Desserts and local sweets
            </p>
            <p>Address: ข้างๆถนน</p>
            <p>Tel: 999-9999999</p>
            <p>E-mail: road@Dessertsandlocalsweets.com</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
