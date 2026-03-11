import Message from "../models/message.model.js";

export const saveMessage = async (data) => {
  const message = new Message(data);
  return await message.save();
};