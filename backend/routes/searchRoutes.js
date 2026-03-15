const express = require("express")
const router = express.Router()

const Search = require("../models/Search")

router.post("/", async (req, res) => {

  const { query } = req.body

  const search = new Search({ query })

  await search.save()

  res.json({ message: "Search stored successfully" })

})

router.get("/", async (req, res) => {

  const searches = await Search.find().sort({ createdAt: -1 })

  res.json(searches)

})

module.exports = router