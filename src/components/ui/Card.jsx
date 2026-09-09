import { FaUser,FaFlag  } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col gap-4">
        <div className="upperbody">
          <h2 className="card-title">
            {" "}
            <FaUser /> Card Title
          </h2>

          <div className=" flex justify-between items-center">
            <p className="flex gap-2 items-center"> <FaFlag/> Bangladesh</p>
            <span className="py-2 px-4 bg-base-300 text-base-content/80 inline-block rounded-md capitalize">
              all-rounder
            </span>
          </div>
        </div>
         <div className="divider"></div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
