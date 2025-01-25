import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import authRouters from "./routes/authRouters.js";
import { ensureAuthenticated } from "./config/authMiddleware.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;

const app = express();

// Configuración del motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// Middleware para JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, "public")));

// Enrutadores
app.use("/auth", authRouters);

// Rutas principales
app.get("/", (req, res) => res.render("login")); 
app.get("/register", (req, res) => res.render("register"));
app.get("/profile", ensureAuthenticated, (req, res) => res.render("profile"));

// Iniciar el servidor
app.listen(PORT, () =>
    console.info(`Servidor corriendo en el puerto: ${PORT}`)
);