const Submit = () => {
  return (
    <div className="submit flex flex-col  gap-2 text-left justify-center items-center h-screen bg-black">
 

      <div className="flex  flex-col gap-4 p-7 h-96 w-96 bg-zinc-900 shadow-lg">
      <h1 className="text-2xl font-semibold text-white capitalize">create a post </h1>
        <input placeholder="title" className="text bg-zinc-900 border-zinc-800 text-white p-3 border" />
        <textarea cols={10} placeholder="body" className="text h-52 bg-zinc-900 border-zinc-800 text-white p-3 border" />
        <button className="bg-zinc-300 font-bold p-4 text-black">Post</button>
      
      </div>
    </div>
  );
};

export default Submit;
