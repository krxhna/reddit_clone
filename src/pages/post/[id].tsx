// pages/post/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {XMarkIcon} from "@heroicons/react/24/outline"

export default function PostPage() {
  const [post, setPost] = useState<any>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  async function getPost() {
    if (id) {
      try {
        const response = await fetch(`/api/getpost/?id=${id}`);
        const json = await response.json();
        setPost(json);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }
  useEffect(() => {
    getPost();
  }, [id]);

  if(loading){
    return  <div className=" text-white flex justify-center items-center h-screen w-screen bg-zinc-900">
      <span>
      loading...
      </span>
    </div>
  }

  return (
    <div className="flex h-full  min-h-screen  items-center justify-center overflow-x-hidden  bg-zinc-900 p-10 ">
      <div className="fixed inset-0 flex h-12 items-center justify-center gap-4 bg-black text-white ">
        {/* <span>{post?.title}</span> */}
        <a href="/" className="flex justify-center items-center gap-2 hover:text-red-500">
        <XMarkIcon className="h-4 w-4 cursor-pointer"/>
          <span>Close</span>
          </a>
      </div>
      <div className="h-full max-w-2xl  overflow-x-hidden bg-zinc-900 p-5">
        {/* <div>{post?.title}</div> */}
        <span className=" flex items-center gap-3 text-gray-500">
          <p className="my-3 bg-orange-500 px-3 py-1 font-semibold text-white">
            {post?.topic}
          </p>
          <p>{post?.createdAt}</p>
          <p>{post?.username}</p>
        </span>
        <div className="text-3xl font-bold text-white">{post?.title}</div>
        <div className="text-white ">{post?.content}</div>
      </div>
    </div>
  );
}
