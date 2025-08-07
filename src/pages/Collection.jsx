import React from "react";
import CardList from "../components/CardList";
import allCardData from "../service/allCardData";

const Collection = () => {
  const cardDataUSA = allCardData.filter((card) => card.location === "USA");
  const cardDataJapan = allCardData.filter((card) => card.location === "Japan");
  const cardDataThailand = allCardData.filter(
    (card) => card.location === "Thailand"
  );
  const cardDataFrance = allCardData.filter(
    (card) => card.location === "France"
  );

  return (
    <>
      <section className="bg-[#E3D5CA] py-8 ">
        <main className=" container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            อเมริกา (USA)
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataUSA} />
        </main>
      </section>

      <section className="bg-[#F5EBE1] py-8">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            ญี่ปุ่น (Japan)
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataJapan} />
        </main>
      </section>

      <section className="bg-[#D6CCC2] py-8">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            ไทย (Thailand)
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataThailand} />
        </main>
      </section>

      <section className="bg-[#EDEEE9] py-8 min-h-screen flex flex-col">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            ฝรั่งเศส (France)
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataFrance} />
        </main>
      </section>
    </>
  );
};

export default Collection;
