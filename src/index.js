import dotenv, { config } from "dotenv";
import express from "express";
import ConnectDB from "./db/connectDB.js";
dotenv.config();
ConnectDB();

const app = express.json();