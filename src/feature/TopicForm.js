const TopicForm = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-8">
      <select className="text-gray-800 rounded-lg pl-4 pr-2">
        <option value="shuffle">Shuffle</option>
        <option value="tech">tech</option>
        <option value="game">game</option>
        <option value="movie">movie</option>
        <option value="history">history</option>
        <option value="bio">bio</option>
      </select>
      <button
        type="submit"
        className="px-6 py-2 bg-pink-500 rounded-xl shadow-sm text-gray-100 font-basic hover:bg-pink-400 focus:ring-4 ring-pink-300"
      >
        Let's go 🚀
      </button>
    </form>
  );
};

export default TopicForm;
