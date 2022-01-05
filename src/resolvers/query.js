const Query = {
  hello(parent, args, ctx, info) {
    const { name } = args;
    console.log(ctx);
    return `hola ${name}`;
  },
  users(parent, args, ctx, info) {
    const { _id } = args;
    const { db } = ctx;
    if (!_id) return db.users;
    return db.users.filter((user) => user.id == _id);
  },

  courses(parent, { _id }, { db }, info) {
    if (!_id) return db.courses;

    return db.courses.filter((course) => course.id == _id);
  },
};

module.exports = Query;
