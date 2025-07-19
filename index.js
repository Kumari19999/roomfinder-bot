app.post('/', (req, res) => {
  const intentName = req.body.queryResult.intent.displayName;
  console.log("Intent:", intentName);

  let responseText = "Sorry, I don't understand.";

  if (intentName === "Default Welcome Intent") {
    responseText = "Hello! Welcome to Room Finder.";
  } else if (intentName === "Default Fallback Intent") {
    responseText = "Sorry, I didn't get that. Please try again.";
  }
  // Add more intent checks here as needed:
  // else if (intentName === "Your Custom Intent Name") { responseText = "..." }

  res.json({
    fulfillmentText: responseText
  });
});
