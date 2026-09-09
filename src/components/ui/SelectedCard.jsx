const SelectedCard = ({
  selectedPlayerCard,
  setSelectedCard,
  setTotalCoin,
}) => {
  const { name, id, price } = selectedPlayerCard;
  function removePlayer() {
    setSelectedCard((prev) => prev.filter((payler) => payler.id !== id));
    setTotalCoin((prev) => prev + price);
  }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button onClick={removePlayer} className="btn btn-square btn-sm">
            <svg
              aria-label="Close"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SelectedCard;
