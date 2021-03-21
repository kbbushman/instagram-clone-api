function authRequired(req) {
  if (req) {
    const adminSecret = req.headers['x-hasura-admin-secret'];

    if (adminSecret !== process.env.ADMIN_SECRET) {
      throw new Error('Not authenticated');
    }
    
    return true;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  authRequired,
};
