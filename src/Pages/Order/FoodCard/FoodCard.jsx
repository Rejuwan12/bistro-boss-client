

const FoodCard = ({item}) => {
    const {image,name, price, recipe} = item;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-500 text-white absolute right-0 mr-4 mt-4 px-2 rounded-xl">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title ">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-outline text-orange-500 bg-slate-200 border-orange-500 border-0 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;