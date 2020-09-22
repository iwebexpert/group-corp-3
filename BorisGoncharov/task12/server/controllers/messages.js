const express = require('express');
const asyncHandler = require('../middlewares/async');

const Message = require('../models/Message');

const router = express.Router();

const getMessages = asyncHandler(async (req, res) => {
  res.status(200).send(
    await Message.find({ chat: req.params.chatId }).populate({
      path: 'user',
      select: 'id fullName',
    })
  );
});

const addMessage = asyncHandler(async (req, res) => {
  res.status(200).send(await Message.create(req.body));
});

const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(500).send("Message with this id can't be found");
  }

  await message.remove();

  res.status(200).send({});
});

router
  .get('/:chatId', getMessages)
  .post('', addMessage)
  .delete('/:id', deleteMessage);

module.exports = router;
