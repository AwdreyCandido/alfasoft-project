import db from "../../config/database";
import { hash, compare } from "../../utils/password";
import { sign } from "../../utils/jwt";

export const register = async (
  email: string,
  password: string
): Promise<void> => {
  const hashed = await hash(password);

  await db.execute("INSERT INTO users (email, password) VALUES (?, ?)", [
    email,
    hashed,
  ]);
};

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const [rows] = await db.execute<any[]>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  const user = rows[0];
  if (!user || !(await compare(password, user.password))) {
    throw new Error("Invalid Credentials");
  }

  return sign({ id: user.id });
};
