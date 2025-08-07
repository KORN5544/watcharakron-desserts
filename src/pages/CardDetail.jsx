import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import allCardData from "../service/allCardData";

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = allCardData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <div>ไม่พบข้อมูลการ์ดที่คุณต้องการ</div>;
  }

  const renderHowToSteps = () => {
    if (typeof card.howto === "string") {
      return card.howto
        .split(/\d+\.\s/)
        .filter((step) => step.trim() !== "")
        .map((step, index) => <li key={index}>{step}</li>);
    } else if (Array.isArray(card.howto)) {
      return card.howto.map((step, index) => <li key={index}>{step}</li>);
    } else {
      return <li>ไม่มีข้อมูลวิธีทำ</li>;
    }
  };

  return (
    <>
      <main className="flex-grow min-h-screen bg-[#E3D5CA]">
        <div className="container mx-auto py-10 px-4">
          <div className="md:flex md:flex-row rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2 w-full">
              <img src={card.imageUrl} alt={card.title} />
            </div>
            <div className="md:w-1/2 w-full p-6 flex flex-col">
              <h1 className="text-4xl font-bold text-black mb-4">
                {card.title}
              </h1>
              <h1 className="text-3xl font-bold text-black mb-6">วิธีทำ</h1>
              <ul className="list-decimal pl-6 text-gray-700 text-2xl leading-relaxed">
                {renderHowToSteps()}
              </ul>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="mt-8 px-6 py-3 bg-[#F5EBE1] text-black rounded-lg shadow-md hover:bg-[#D6CCC2] transition duration-300"
          >
            ย้อนกลับ
          </button>
        </div>
      </main>
    </>
  );
};

export default CardDetail;
