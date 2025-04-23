
import express from "express";
import bodyParser from "body-parser";
import db from "./models/index.js";
import userRoutes from "./routes/user.route.js";

const app = express();
app.use(express.json());

db.sequelize.sync().then(() => {
  console.log("✅ Sequelize DB Synced");
});

app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
