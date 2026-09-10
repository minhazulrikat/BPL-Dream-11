import SelectedCard from "../../../components/ui/SelectedCard";

const SelectedPlayer = ({
  setSelectedCard,
  selectedCard,
  setTotalCoin,
  totalCoin,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {selectedCard.length === 0 ?
        <div className="bg-base-300 min-h-[60vh] flex flex-col gap-6 justify-center items-center rounded-2xl">
          <h2 className="text-3xl font-bold text-center">No player has been selected yet.</h2>
          <p className="max-w-[650px] text-center">You haven’t selected any players yet. Select players from the available list to build your dream team.</p>
        </div>
        :selectedCard.map((selectedPlayerCard) => {
          return (
            <SelectedCard
              selectedPlayerCard={selectedPlayerCard}
              setSelectedCard={setSelectedCard}
              totalCoin={totalCoin}
              setTotalCoin={setTotalCoin}
            ></SelectedCard>
          );
        })}
      </div>
    </>
  );
};

export default SelectedPlayer;
