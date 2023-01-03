const Card = (props) => {
  return (
    <div className="bg-indigo-600 text-white font-poppins w-full text-center py-12 rounded-xl shadow-lg space-y-8 bg-opacity-40 backdrop-filter backdrop-blur-md firefox:bg-opacity-90 z-20 py-8 px-12">
      {props.children}
    </div>
  );
};

export default Card;
