// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-[#E3D5CA] py-8">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">หน้าหลัก</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
        </div>
      </section>

      <section className="bg-[#E3D5CA] min-h-screen flex flex-col py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full p-4">
              <h2 className="text-3xl font-bold text-black mb-4">
                แนะนำของหวานและขนมท้องถิ่น
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                "สูตรขนมหวานที่ทำตามได้จริง
                พร้อมเคล็ดลับและเทคนิคให้คุณทำขนมอร่อยได้เหมือนมืออาชีพ"
              </p>
              <Link
                to="Collection"
                className="px-6 py-3 bg-[#F5EBE1] text-black rounded-lg shadow-md hover:bg-[#D6CCC2] transition duration-300"
              >
                ขนมหวานและขนมพื้นเมือง
              </Link>
            </div>
            <div className="md:w-1/2 w-full p-4">
              <img
                src="/picture/ขนมหวานและขนมพื้นเมือง.png"
                alt="ปกหน้าหลัก"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
