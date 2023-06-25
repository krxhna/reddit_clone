import { useState } from "react";

const Submit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        alert("Post submitted successfully");

        // Reset form fields
        setTitle("");
        setContent("");
      } else {
        console.error("Failed to submit post");
      }
    } catch (error) {
      console.error("An error occurred while submitting the post", error);
    }
  };
  return (
    <div className="submit flex h-screen  flex-col items-center justify-center gap-2 bg-black text-left">
      <div className="flex  h-96 w-96 flex-col gap-4 bg-zinc-900 p-7 shadow-lg">
        <h1 className="text-2xl font-semibold capitalize text-white">
          create a post{" "}
        </h1>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text border border-zinc-800 bg-zinc-900 p-3 text-white"
        />
        <textarea
          cols={10}
          placeholder="body"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text h-52 border border-zinc-800 bg-zinc-900 p-3 text-white"
        />
        <button
          className="bg-zinc-300 p-4 font-bold text-black"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Submit;
