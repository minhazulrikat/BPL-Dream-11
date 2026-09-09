import SelectedCard from "../../../components/ui/SelectedCard";

const SelectedPlayer = ({ setSelectedCard, selectedCard }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {selectedCard.map((selectedCard)=>{
            return(
                <SelectedCard
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        ></SelectedCard>
            )
        })}
      </div>
    </>
  );
};

export default SelectedPlayer;
