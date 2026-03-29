import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "inventory",
  password: "1234", // 🔴 PUT YOUR REAL PASSWORD
  port: 5432
});

pool.connect()
  .then(() => console.log("DB Connected ✅"))
  
  .catch(err => console.error("DB ERROR ❌", err.message));

export default pool;