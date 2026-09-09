import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({ player, setSelectedCard, selectedCard , isSelected ,setIsSelected }) => {
  const {
    name,
    nationality,
    playerType,
    bowlingStyle,
    battingStyle,
    price,
    rating,
    imageUrl,
  } = player;

  function handleSelection(player) {
    if(isSelected){
        return;
    }
    setSelectedCard([...selectedCard, player]);
    setIsSelected(true);
  }

  return (
    <div className="card bg-base-100 shadow border border-base-300">
      <figure className="m-4 rounded-lg border border-base-300">
        <img className="object-contain" src={imageUrl} alt="player image" />
      </figure>
      <div className="card-body">
        <div className="upperbody">
          <h2 className="card-title mb-4">
            {" "}
            <FaUser /> {name}
          </h2>

          <div className=" flex justify-between items-center">
            <p className="flex gap-2 items-center text-base-content/60">
              {" "}
              <FaFlag /> {nationality}
            </p>
            <span className="py-2 px-4 bg-base-300 text-base-content/80 inline-block rounded-md capitalize">
              {playerType}
            </span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="lower-body space-y-3">
          <p className="mb-4 font-bold">Rating {rating}</p>
          <div className="flex justify-between items-center">
            <p className="font-bold">{battingStyle}</p>
            <p className="text-right">{bowlingStyle}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Price: ${price}</p>
            <button
              onClick={() => handleSelection(player)}
              className="btn font-normal"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
