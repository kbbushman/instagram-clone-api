const TEMP_USERS = [
  {
    id: 1,
    username: 'UserOne',
    name: 'User One',
    email: 'userone@gmail.com',
    bio: 'This is the bio for User One...',
    website: 'http://example.com',
    user_id: '1',
    phone_number: '555-555-5555',
    profile_image: 'http://example.com',
    last_checked: 'today',
    created_at: 'yesterday',
    updated_at: 'today'
  },
  {
    id: 2,
    username: 'UserTwo',
    name: 'User Two',
    email: 'usertwo@gmail.com',
    bio: 'This is the bio for User Two...',
    website: 'http://example.com',
    user_id: '2',
    phone_number: '555-555-4444',
    profile_image: 'http://example.com',
    last_checked: 'today',
    created_at: 'yesterday',
    updated_at: 'today'
  },
];

function getUsers(parent, args, context, info) {
  // return TEMP_USERS;
  return context.prisma.user.findMany();
}

module.exports = {
  getUsers,
};
