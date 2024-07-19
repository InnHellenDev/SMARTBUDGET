import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/DB_Presupuesto2504",
  PORT: process.env.PORT || 4000,
  SECRET: 'presupuesto2504-api'//Palabra secreta
};
// MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/DB_Presupuesto2504",
//"mongodb://arcaAdmin:Arca.Admin.2208@ccssvarcalinux01-devs.caja.ccss.sa.cr:27017/?replicaSet=rs01-arca-devs",