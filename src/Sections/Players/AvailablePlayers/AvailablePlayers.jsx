import { use } from "react";
import Card from "../../../components/ui/Card";

const AvailablePlayers = ({ playersData, setSelectedCard, selectedCard, isSelected,setIsSelected}) => {
  const players = use(playersData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player) => {
        return (
          <Card
            key={player.id}
            player={player}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          ></Card>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
