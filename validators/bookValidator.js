const {z} = require("zod");

const BookSchema = z.object({
  name: z.string().min(3).trim(),
  author: z.string().min(5).trim(),
})