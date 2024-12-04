import express, { Request, Response } from "express";
import { envs } from './config/envs';
import { dbConnection } from "./db/init";
import { User } from "./db/models/user.models";
import { Product } from "./db/models/product.models";
import { Category } from "../drinks_server/src/db/models/category.models";
const express = require('express');
const path = require('path');

const app = express();

app.get("/allFromUser", async (req, res) => {
  try {
    const allFromUser = await User.findAll(); // Fetch all tasks from the database
    return res.json(allFromUser);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving tasks" });
  }
});


// ////////////////////
// CART
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'Cart/cart.html'));
});

//////////////////////
// CAT
app.get('/cat', (req, res) => {
  res.sendFile(path.join(__dirname, 'Cat/Cat.html'));
});

/////////////////////
// CATRINA
app.get('/catrina', (req, res) => {
  res.sendFile(path.join(__dirname, 'Catrina/Catrina.html'));
});

/////////////////
// HEART
app.get('/heart', (req, res) => {
  res.sendFile(path.join(__dirname, 'Heart/heart.html'));
});

////////////////////
// KRACKEN
app.get('/kracken', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kracken/kracken.html'));
});

///////////////////////////
// LOVERS
app.get('/lovers', (req, res) => {
  res.sendFile(path.join(__dirname, 'Lovers/lovers.html'));
});

//////////////////////////////
// RUM 
app.get('/rum', (req, res) => {
  res.sendFile(path.join(__dirname, 'Rum/Rum.html'));
});

///////////////////////////
// SMILEFACE
app.get('/smileface', (req, res) => {
  res.sendFile(path.join(__dirname, 'Smile_Face/smileFace.html'));
});

///////////////////////////
// TEQUILA
app.get('/tequila', (req, res) => {
  res.sendFile(path.join(__dirname, 'Tequila/Tequila.html'));
});

///////////////////////////
// WHISKEY
app.get('/whiskey', (req, res) => {
  res.sendFile(path.join(__dirname, 'Whiskey/whiskey.html'));
});

///////////////////////////
// WIN
app.get('/whiskey', (req, res) => {
  res.sendFile(path.join(__dirname, 'Win/Win.html'));
});


app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});