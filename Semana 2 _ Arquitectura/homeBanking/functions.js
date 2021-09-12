const mongoose = require("../restaurant/connection");
const users = require("./userModel");

const createUser = async (user) => {
  const newUser = new users(user);
  const response = await newUser.save();
  return response;
};

const modifyBalance = async (req) => {
  const aux = await users.findOne({ mail: req.body.mail });
  const balance = req.body.amount + aux.balance;
  const response = await users.findOneAndUpdate(
    { mail: req.body.mail },
    { balance: balance }
  );
  return response;
};

const transfer = async (req) => {
  let response;

  const session = await mongoose.startSession();
  session.startTransaction();

  const aux = await users.findOne({ mail: req.body.originMail });

  if (aux.balance - req.body.amount < 0) {
    await session.abortTransaction();
    response = "Insufficient amount";
    return response;
  }

  const balance = aux.balance - req.body.amount;
  const res1 = await users.findOneAndUpdate(
    { mail: req.body.originMail },
    { balance: balance }
  );

  const aux2 = await users.findOne({ mail: req.body.destinationMail });
  const balance2 = aux2.balance + req.body.amount;
  const res2 = await users.findOneAndUpdate(
    { mail: req.body.destinationMail },
    { balance: balance2 }
  );

  await session.commitTransaction();
  session.endSession();

  response = [res1, res2];
  return response;
};

const findMail = async (mail) => await users.exists({ mail: mail });

const mailExist = (req, res, next) => {
  findMail(req.body.mail)
    .then((result) =>
      result ? next() : res.status(404).send("mail doest exist")
    )
    .catch(() => res.status(404).json("mail doest exist"));
};

const findMails = async (req) =>
  (await findMail(req.body.originMail)) &&
  (await findMail(req.body.destinationMail));

const mailsExist = (req, res, next) => {
  findMails(req)
    .then((result) =>
      result ? next() : res.status(404).send("mail doest exist")
    )
    .catch(() => res.status(404).json("mail doest exist"));
};

module.exports = {
  createUser,
  modifyBalance,
  transfer,
  mailExist,
  mailsExist,
};
 