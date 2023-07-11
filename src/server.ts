import { app } from "./app";
import { datasource } from "./database/index";
//import "../../../shared/container";
import "dotenv/config";
const Port = process.env.PORT;

datasource.initialize().then(() => {
  app.listen(`${Port}`, () => {
    return console.log(`Server started on port ${Port}! 🏆`);
  });
});

export default app;
