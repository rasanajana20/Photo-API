
const users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const addUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User added', user: newUser });
};

module.exports = { getUsers, addUser };
