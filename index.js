import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
const port = 4000;

app.use(express.static("public", { extensions: ["html"] }));
app.listen(port, () => {
	console.log(`Running on http://localhost:${port}`);
});
