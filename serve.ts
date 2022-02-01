import express from "express";
import router from "./src/router/api";

const app = express();
const PORT = 4444;

app.use("/api", router);

app.listen(PORT, () => console.log(`Servidor iniciando na porta localhost:${PORT}`));