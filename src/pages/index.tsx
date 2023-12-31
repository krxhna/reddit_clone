import { type NextPage } from "next";

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

import { differenceInHours } from "date-fns";

import { useEffect, useState } from "react";

const Home: NextPage = () => {
  function getposts() {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getposts();
  }, []);
  return (
    <div className="flex h-screen ">
      <div className="flex h-screen w-96 items-center justify-center bg-black p-4">
        <div className="flex h-32 flex-col items-center justify-center gap-4">
          <a href="/submit" target="_blank" rel="noreferrer">
            <button className="bg-white p-3 ">create a post</button>
          </a>
          <button className="bg-black p-3 text-white">create a post</button>
        </div>
      </div>

      <div className="flex h-full min-h-screen w-full  flex-col items-center  overflow-y-scroll  bg-zinc-900">
        <div className="sticky  top-0 flex h-20 w-full items-center justify-center gap-4 bg-zinc-900">
          <img
            src="https://em-content.zobj.net/thumbs/120/apple/354/lizard_1f98e.png"
            className="h-10"
            alt=""
          />
          <span className="font-bold text-green-500">LEDDIT</span>
          {/* <input
            type="text"
            className="text border border-zinc-800 bg-zinc-900 p-3 text-white"
            name=""
            id=""
          /> */}
        </div>
        <div className="h-[80vh] p-10">
          <div>
            {posts.map((item, index) => (
              <Homecard
                key={item.id}
                upvotes={item.upvotes}
                date={item.createdAt}
                username={item.username}
                content={item.content}
                title={item.title}
                topic={item.topic}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Homecard = (props: any) => {
  return (
    <>
      <main>
        <div className="m-5 flex h-52 max-h-96 w-[40rem] gap-2   overflow-hidden border border-zinc-700 bg-zinc-800 p-3 text-white shadow-lg">
          <div className="flex flex-col items-center gap-2 p-3">
            <ArrowUpCircleIcon className="h-7 w-7" />
            <p className=" font-bold">{props.upvotes}</p>
            <ArrowDownCircleIcon className="h-7 w-7" />
          </div>
          <div className="flex flex-col">
            <div className="h-52 overflow-hidden">
              <span className="my-2 flex gap-2 text-sm text-gray-400">
                <a
                  className="font-bold text-gray-100 "
                  href={"r/" + props.topic}
                >
                  r/
                  {props.topic}
                </a>

                <p className="">posted by u/{props.username}</p>
                <p className="">
                  {differenceInHours(new Date(), Date.parse(props.date))} hours
                  ago
                </p>
              </span>
              <h1 className="text-2xl font-bold capitalize">{props.title}</h1>
              <p className="">{props.content}</p>
            </div>
            <a href={"/post/" + props.id}>
              <div className="my-3 flex gap-2 text-sm text-gray-400">
                Read more
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
