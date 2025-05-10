const Task = require('../models/Task');
const mongoose = require('mongoose');

// Insert a single document
exports.insertOne = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Insert multiple documents
exports.insertMany = async (req, res) => {
  try {
    const tasks = await Task.insertMany(req.body);
    res.status(201).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find documents matching a query
exports.find = async (req, res) => {
  try {
    const tasks = await Task.find(req.query);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find the first document matching a query
exports.findOne = async (req, res) => {
  try {
    const task = await Task.findOne(req.query);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find with limit
exports.findWithLimit = async (req, res) => {
  try {
    const tasks = await Task.find().limit(parseInt(req.query.limit));
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find with skip
exports.findWithSkip = async (req, res) => {
  try {
    const tasks = await Task.find().skip(parseInt(req.query.skip));
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find with sort
exports.findWithSort = async (req, res) => {
  try {
    const tasks = await Task.find().sort(req.query);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Distinct values
exports.distinct = async (req, res) => {
  try {
    const values = await Task.distinct(req.query.field);
    res.status(200).json(values);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Count documents
exports.countDocuments = async (req, res) => {
  try {
    const count = await Task.countDocuments(req.query);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update one document
exports.updateOne = async (req, res) => {
  try {
    const task = await Task.updateOne(req.query, req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update many documents
exports.updateMany = async (req, res) => {
  try {
    const result = await Task.updateMany(req.query, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Replace one document
exports.replaceOne = async (req, res) => {
  try {
    const result = await Task.replaceOne(req.query, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete one document
exports.deleteOne = async (req, res) => {
  try {
    const result = await Task.deleteOne(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete many documents
exports.deleteMany = async (req, res) => {
  try {
    const result = await Task.deleteMany(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Aggregate
exports.aggregate = async (req, res) => {
  try {
    const result = await Task.aggregate(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create index
exports.createIndex = async (req, res) => {
  try {
    const result = await Task.collection.createIndex(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Drop index
exports.dropIndex = async (req, res) => {
  try {
    const result = await Task.collection.dropIndex(req.body.indexName);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get indexes
exports.getIndexes = async (req, res) => {
  try {
    const indexes = await Task.collection.indexes();
    res.status(200).json(indexes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find one and update
exports.findOneAndUpdate = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(req.query, req.body, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find one and delete
exports.findOneAndDelete = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete(req.query);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bulk write
exports.bulkWrite = async (req, res) => {
  try {
    const result = await Task.collection.bulkWrite(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find one and replace
exports.findOneAndReplace = async (req, res) => {
  try {
    const task = await Task.findOneAndReplace(req.query, req.body, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Rename collection
exports.renameCollection = async (req, res) => {
  try {
    const result = await mongoose.connection.db.renameCollection(req.body.oldName, req.body.newName);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Drop collection
exports.dropCollection = async (req, res) => {
  try {
    const result = await mongoose.connection.db.dropCollection(req.body.collectionName);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// List collections
exports.listCollections = async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};