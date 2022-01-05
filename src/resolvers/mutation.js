const Mutation = {
  newUser: (parent, { data }, { db }, info) => {
    const user = {
      ...data,
    };

    db.users.push(user);
    return user;
  },
};

module.exports = Mutation;
