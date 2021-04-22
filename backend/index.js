const express = require("express");

const app = express();

app.use(express.json());

var surveys = [
  {
    title: "Coding",
    questions: [
      {
        title: "What is your favourite Web Framework?",
        options: ["Angular", "React", "Vue", "jQuery"],
      },
      {
        title: "What is your favourite programming language?",
        options: ["Java", "Python", "JavaScript", "C"],
      },
      {
        title: "At what age you started learning to code?",
        options: ["below 15", "15 to 18", "18 to 24", "24 above"],
      },
      {
        title: "Why do you code?",
        options: [
          "Professional Work",
          "You like to create new things",
          "It is a fun way to pass time",
          "Learning",
        ],
      },
      {
        title: "Which device do your code on",
        options: ["Windows", "MacOS", "Linux"],
      },
    ],
  },
  {
    title: "Pokemon",
    questions: [
      {
        title: "Choose your starter Pokemon!",
        options: ["Charmander", "Bulbasaur", "Squrtle", "Pikachu"],
      },
      {
        title: "Which type you like the most?",
        options: ["Fire", "Water", "Electric", "Grass", "Flying", "Psysic"],
      },
      {
        title: "Which gym leader you liked the most?",
        options: ["Brock", "Misty", "Lt. Surge", "Erika"],
      },
      {
        title: "Which is your favourite Pokemon Saga?",
        options: [
          "Indigo League",
          "Johto League",
          "Hoenn League",
          "Sinnoh League",
        ],
      },
    ],
  },
];

var responses = [];

app.get("/", function (req, res) {
  res.send("Server is working");
});

app.get("/api/surveys", function (req, res) {
  console.log("Supplying the data");
  res.json(surveys);
});

app.post("/api/postSurvey", function (req, res) {
  console.log(req.body);
  var data = req.body.survey;

  surveys.push(data);
  res.json("User added successfully");
});

app.post("/api/postResponse", function (req, res) {
  var data = req.body;
  responses.push(data);
  console.log(responses);

  res.json("Response stored successfully");
});

app.listen(8080, function () {
  console.log("Server started at port 8080");
});
