import { MdDelete } from "react-icons/md";

const SelectedCard = ({
  selectedPlayerCard,
  setSelectedCard,
  setTotalCoin,
}) => {
  const { name, id, price , imageUrl, playerType} = selectedPlayerCard;
  function removePlayer() {
    setSelectedCard((prev) => prev.filter((payler) => payler.id !== id));
    setTotalCoin((prev) => prev + price);
  }
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300">
      <div className="card-body justify-between flex-row items-center">
      <div className="justify-start items-center flex gap-4 ">
        <img className="h-20 w-auto object-cover overflow-hidden rounded-lg" src={imageUrl} alt="" />
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-base-content/70">{playerType}</p>
    </div>
      </div>

        <div className="card-actions justify-end">
          <button onClick={removePlayer} className="btn btn-square btn-sm">
            <MdDelete className="text-3xl" />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default SelectedCard;
