const { authRequired } = require('../utils');

async function addUser(parent, args, context, info) {
  authRequired(context);

  const newUser = await context.prisma.user.create({ data: { ...args.userInput } });

  return newUser;
}

module.exports = {
  addUser,
};
