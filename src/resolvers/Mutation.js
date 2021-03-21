async function addUser(parent, args, context, info) {
  const newUser = await context.prisma.user.create({ data: { ...args.userInput } });

  return newUser;
}

module.exports = {
  addUser,
};
