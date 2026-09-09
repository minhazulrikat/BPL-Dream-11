import { Suspense, useState } from "react";
import AvailablePlayers from "./Available Players/AvailablePlayers";

const playersData = fetch("/players.json").then((res) => res.json());

const Players = () => {
  const [isSelected, setIsSelected] = useState(false);
  function selectHandler(btnName) {
    if (btnName === "available") {
      setIsSelected(false);
    } else if (btnName === "selected") {
      setIsSelected(true);
    }
  }
  return (
    <section>
      {/* main container */}
      <div className="container mx-auto">
        {/* header wraper */}
        <div className="flex justify-between items-center mt-16 lg:mt-22 mb-8">
          <h2 className="text-2xl font-bold">Available Players</h2>
          <div className="flex">
            <button
              onClick={() => selectHandler("available")}
              className={`btn rounded-r-none rounded-l-xl border-r-0 ${isSelected ? "" : " bg-[#E7FE29] font-bold "}`}
            >
              Available
            </button>
            <button
              onClick={() => selectHandler("selected")}
              className={`btn rounded-l-none rounded-r-xl border-l-0 ${isSelected ? " bg-[#E7FE29] font-bold " : ""}`}
            >
              Selected (0)
            </button>
          </div>
        </div>
        {/* Header wrap end here  */}

        {/* player cards wrapper strat here  */}
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers playersData={playersData}></AvailablePlayers>
        </Suspense>

        {/* player cards wrapper end here  */}

        {/* main container end here  */}
      </div>
    </section>
  );
};

export default Players;
