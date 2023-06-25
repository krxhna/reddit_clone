import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { title, content } = req.body;

    try {
      const createdPost = await prisma.posts.create({
        data: {
          title: title,
          content: content,
          topic: "test",
          upvotes: 5,
          username: "u/testbase",
        },
      });

      res.status(201).json(createdPost);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the post." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
