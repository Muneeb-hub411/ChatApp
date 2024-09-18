import Conversation from "./../models/Conversation.Model.js";
import messageModel from "./../models/Message.Model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await messageModel.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    return res.status(200).send({
      success: true,
      newMessage,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in sending message",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");

    if (!conversation) {
      return res.status(400).send({
        success: false,
        message: "No chat found",
      });
    }
    const message = conversation.messages;
    return res.status(200).send({
      success: true,
      message,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getting chat",
    });
  }
};
