const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());

// GET /search
app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    // Return all documents if no query provided
    res.json(documents);
  } else {
    // Filter documents by query
    const filteredDocuments = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    res.json(filteredDocuments);
  }
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((doc) => doc.id === id);
  if (document) {
    res.json(document);
  } else {
    res.status(404).send("Document not found");
  }
});

// POST /search
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;
  if (query && fields) {
    res
      .status(400)
      .send("Can't provide both query parameter and fields in request body");
  } else {
    let filteredDocuments = documents;
    if (query) {
      // Filter documents by query
      filteredDocuments = documents.filter((doc) =>
        Object.values(doc).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        )
      );
    }
    if (fields) {
      // Filter documents by fields
      Object.keys(fields).forEach((key) => {
        filteredDocuments = filteredDocuments.filter(
          (doc) => doc[key] === fields[key]
        );
      });
    }
    res.json(filteredDocuments);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
