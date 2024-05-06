import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("This is the root route. What are you doing here?.");
});

app.get("/contestants", async (request, response) => {
  const result = await db.query(`SELECT
  contestants.id,
  contestants.name,
  contestants.age,
  ARRAY_AGG(ingredients.item) AS ingredients
  FROM contestants
  JOIN ingredients_junction ON contestants.id = ingredients_junction.contestant_id
  JOIN ingredients ON ingredients_junction.ingredient_id = ingredients.id
  GROUP BY contestants.id, contestants.name, contestants.age`);
  response.json(result.rows);
});

app.post("/contestant", async (request, response) => {
  const name = request.body.name;
  const age = request.body.age;
  db.query(`INSERT INTO contestants (name, age) VALUES ($1, $2)`, [name, age]);
  response.json({ success: true });
});

app.listen(8080, () => console.log("You are live on 8080"));