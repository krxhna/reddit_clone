import { type NextPage } from "next";

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
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

      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-y-scroll  bg-zinc-900">
        {/* <div className="h-20 bg-white border">fsdfds</div> */}
        <div className="h-[80vh]">
          <Homecard
            upvotes={34}
            date={4569}
            username="u/gothlover"
            content="content"
            title="title"
            topic="r/cats"
          />
        </div>
      </div>
    </div>
  );
};

const Homecard = (props: any) => {
  return (
    <>
      <main>
        <div className="m-5 flex h-52 max-h-96 w-[40rem]  gap-2 border border-zinc-700 bg-zinc-800 p-3 text-white shadow-lg">
          <div className="flex flex-col items-center gap-2 p-3">
            <ArrowUpCircleIcon className="h-7 w-7" />
            <p className=" font-bold">{props.upvotes}</p>
            <ArrowDownCircleIcon className="h-7 w-7" />
          </div>
          <div className="d">
            <span className="my-2 flex gap-2 text-sm text-gray-400">
              <p className="font-bold text-gray-100">{props.topic}</p>

              <p className="">{props.date}</p>
              <p className="">{props.username}</p>
            </span>
            <h1 className="text-2xl font-bold ">{props.title}</h1>
            <p className="">{props.content}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
