import axios from "axios";
import Login from "../model/Login.js";
import User from "../model/User.js";


export const loginUser = async (req, res) => {
    try {
        const login = new Login(req.body.email, req.body.password);
        const authURL = process.env.AUTH_URL + "/login";

        const response = await axios.post(authURL, login, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        res.render("profile", {
            login: {
                email: login.email,
                token: response.data.response.access_token,
            },
        });
    } catch (error) {
        if (error.response) {
            console.error("Detalles del error:", error.response.data);

            res.status(error.response.status).render("login", {
                error: error.response.data.response || "Error al iniciar sesión. Por favor, inténtalo de nuevo.",
            });
        } else {
            console.error("Error desconocido:", error.message);
            res.status(500).render("login", {
                error: "Ocurrió un error inesperado."
            });
           
        }
    }
};

export const registerUser = async (req, res) => {
    try {
        const user = new User(req.body.nombre, req.body.correo, req.body.contrasena, req.body.numeroIdetificacion);
        const authURL = process.env.AUTH_URL + "/register";

        const response = await axios.post(authURL, user, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        res.render("profile", {
            login: {
                email: user.correo,
                token: response.data.response.access_token,
            },
        });
    } catch (error) {
        if (error.response) {
            console.error("Detalles del error:", error.response.data);
            res.status(error.response.status).render("register", {
                error: error.response.data.response || "Error al iniciar sesión. Por favor, inténtalo de nuevo.",
            });
        } else {
            console.error("Error desconocido:", error.message);
            res.status(500).send("Ocurrió un error inesperado.");
        }
    }
};

export const logoutUser = async (req, res) => {
    try {
        const authURL = process.env.AUTH_URL + "/logout";

        const token = req.headers.authorization || req.cookies.token;

        if (!token) {
            return res.status(400).send("Token no proporcionado.");
        }
        const response = await axios.post(authURL, {}, {
            headers: {
                "Authorization": `${token}`,
                "Content-Type": "application/json",
            },
        });

        res.clearCookie("token");
        res.render("register");
    } catch (error) {
        console.error("Error durante el logout:", error);

        if (error.response) {
            console.error("Detalles del error:", error.response.data);
            res.status(error.response.status).send(error.response.data);
        } else {
            console.error("Error desconocido:", error.message);
            res.status(500).send("Ocurrió un error inesperado.");
        }
    }
};