import { Suspense, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "./SelectedPlayers/SelectedPlayer";

const playersData = fetch("/players.json").then((res) => res.json());

const Players = ({ setTotalCoin, totalCoin }) => {
  const [seletedTab, setSelectedTab] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  function selectHandler(btnName) {
    if (btnName === "available") {
      setSelectedTab(false);
    } else if (btnName === "selected") {
      setSelectedTab(true);
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
              className={`btn rounded-r-none rounded-l-xl border-r-0 ${seletedTab ? "" : " bg-[#E7FE29] font-bold "}`}
            >
              Available
            </button>
            <button
              onClick={() => selectHandler("selected")}
              className={`btn rounded-l-none rounded-r-xl border-l-0 ${seletedTab ? " bg-[#E7FE29] font-bold " : ""}`}
            >
              Selected ({selectedCard.length})
            </button>
          </div>
        </div>
        {/* Header wrap end here  */}

        {/* player cards wrapper strat here  */}
        <div className="w-full mb-20 flex flex-col justify-center items-center">
          <div className="w-full">
            <Suspense
              fallback={
                <span className="loading loading-dots loading-xl mx-auto"></span>
              }
            >
              {seletedTab ? (
                <SelectedPlayer
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  setTotalCoin={setTotalCoin}
                  totalCoin={totalCoin}
                ></SelectedPlayer>
              ) : (
                <AvailablePlayers
                  playersData={playersData}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  setTotalCoin={setTotalCoin}
                  totalCoin={totalCoin}
                ></AvailablePlayers>
              )}
            </Suspense>
          </div>
        </div>

        {/* player cards wrapper end here  */}

        {/* main container end here  */}
      </div>
    </section>
  );
};

export default Players;
