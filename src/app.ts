import express from "express";
import { router as userApi } from "./routes/user.router";

const app = express();

const PORT = 3000;

app.get("/", (req, res) =>{
    res.status(200).json({message: "Marco's Server is running"})
} );

//middleware
app.use(express.json());

//collegamento alle routes
app.use("/users", userApi);

app.listen(PORT, () => {
    console.log(`Server running at this link http://localhost:${PORT}`)
});

export default app;