import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const post = await prisma.posts.findUnique({ where: { id } });
      res.status(200).json(post);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching posts." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
