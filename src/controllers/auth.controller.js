import jwt from "jsonwebtoken";
import * as Users from "../models/Users.js";

export const register = async (req, res) => {
  const { email, password } = req.body;

  // 1. Validaciones básicas
  if (!email || !password) {
    return res.status(400).json({ error: "Email y password requeridos" });
  }

  // 2. Verificar si el usuario ya existe
  const userExists = await Users.getUserByEmail(email);

  if (userExists) {
    return res.status(409).json({ error: "Usuario ya registrado" });
  }

  // 3. Crear usuario
  const newUser = await Users.createUser({ email, password });

  // 4. Generar token
  const token = jwt.sign(
    { id: newUser.id, email },
    process.env.SECRET,
    { expiresIn: "1h" }
  );

  res.status(201).json({ token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.getUserByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  const token = jwt.sign(
    { id: user.id, email },
    process.env.SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};
