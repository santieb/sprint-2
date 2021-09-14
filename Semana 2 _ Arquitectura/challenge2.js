const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const conectionString = `mongodb://localhost:27017`;
mongoose.connect(conectionString, options);

user = {
  name: String,
  money: Number,
};

const Users2 = mongoose.model("Users2", user);

const juan = { name: "Juan", money: 100 };

let newUser = new Users2(juan);
newUser.save();

const list = async () => {
  let response;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    response = await Users2.findOne({ name: "Jua" });
    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    response = err;
  }
  console.log(response);
  return response;
};
list();
