import { useState } from "react";

const Submit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, settopic] = useState("Global");
  const [username, setusername] = useState("testboi34");
  const items = ["Item 1", "Item 2", "Item 3"];

  const topics = [
    { emoji: "🌎", topic: "Global" },
    { emoji: "🎥", topic: "Entertainment" },
    { emoji: "📚", topic: "Books" },
    { emoji: "🎨", topic: "Art" },
    { emoji: "🎵", topic: "Music" },
    { emoji: "🎮", topic: "Gaming" },
    { emoji: "🍔", topic: "Food" },
    { emoji: "💪", topic: "Fitness" },
    { emoji: "🏋️‍♀️", topic: "Workout" },
    { emoji: "🌱", topic: "Green" },
    { emoji: "📸", topic: "Photography" },
    { emoji: "🚗", topic: "Travel" },
    { emoji: "📰", topic: "News" },
    { emoji: "💡", topic: "Technology" },
    { emoji: "🐶", topic: "Pets" },
    { emoji: "💑", topic: "Relationships" },
    { emoji: "🏡", topic: "Home" },
    { emoji: "🎓", topic: "Education" },
    { emoji: "💼", topic: "Networking" },
    { emoji: "💡", topic: "Lifehacks" },
    { emoji: "⚽️", topic: "Sports" },
    { emoji: "🚀", topic: "Science" },
    { emoji: "🌟", topic: "Celebrities" },
    { emoji: "🎭", topic: "Theater" },
    { emoji: "📺", topic: "Television" },
    { emoji: "💃", topic: "Dance" },
    { emoji: "🚴‍♂️", topic: "Cycling" },
    { emoji: "🏋️‍♂️", topic: "Weightlifting" },
    { emoji: "🎮", topic: "Esports" },
    { emoji: "🍕", topic: "Pizza" },
    { emoji: "🍿", topic: "Movies" },
    { emoji: "🌸", topic: "Fashion" },
    { emoji: "📱", topic: "Mobile" },
    { emoji: "🌞", topic: "Weather" },
    { emoji: "🚀", topic: "Space" },
    { emoji: "🏆", topic: "Achievements" },
    { emoji: "🏰", topic: "History" },
    { emoji: "🚲", topic: "Cycling" },
    { emoji: "🎉", topic: "Celebrations" },
    { emoji: "🌳", topic: "Nature" },
    { emoji: "🚁", topic: "Adventure" },
    { emoji: "🤔", topic: "Philosophy" },
    { emoji: "💡", topic: "Innovation" },
    { emoji: "🌍", topic: "Environment" },
    { emoji: "🚑", topic: "Health" },
    { emoji: "🏥", topic: "Medicine" },
    { emoji: "🚓", topic: "Law" },
    { emoji: "🍣", topic: "Sushi" },
    { emoji: "🏀", topic: "Basketball" },
    { emoji: "🎯", topic: "Goals" },
  ];
  // Declare an array of options...

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, topic, username }),
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
        {/* <p>{topic}</p> */}
        <select
          className="text border border-zinc-800 bg-zinc-900 p-3 text-white"
          value={topic} // ...force the select's value to match the state variable...
          onChange={(e) => settopic(e.target.value)} // ... and update the state variable on any change!
        >
          {topics.map((option) => (
            <option key={option.topic} value={option.topic}>
              {option.emoji} {option.topic}
            </option>
          ))}
        </select>

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
