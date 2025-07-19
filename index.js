const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const intentName = req.body.queryResult.intent.displayName;
  console.log("Intent:", intentName);

  let responseText = "Sorry, I don't understand.";

  if (intentName === "Default Welcome Intent") {
    responseText = "Hello! Welcome to Room Finder.";
  } else if (intentName === "Default Fallback Intent") {
    responseText = "Sorry, I didn’t get that. Please try again.";
  }

  res.json({
    fulfillmentText: responseText
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
