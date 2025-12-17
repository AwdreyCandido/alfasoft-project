import app from "./app";
import { checkDbConnection } from "./config/database";

const PORT = process.env.PORT || 3000;

async function startServer() {
  // await checkDbConnection();

  app.listen(PORT, () => {
    console.log(
      `Servidor da AlfaSoft está a correr em http://localhost:${PORT}`
    );
  });
}

startServer();
