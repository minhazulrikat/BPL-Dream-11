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
        {selectedCard.map((selectedPlayerCard) => {
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
