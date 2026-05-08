const {z} = require("zod");

const registerSchema = z.object({
  name:     z.string().min(2).trim().max(20),
  surname:  z.string().min(3).trim().max(20),
  age:      z.number().int().min(1),
  email:    z.string().email().trim(),
  password: z.string().min(8).trim()
});

const loginSchema = z.object({
  email:    z.string().email().trim(),
  password: z.string().trim()
});

module.exports = {registerSchema, loginSchema};