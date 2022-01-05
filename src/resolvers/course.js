const Course = {
  created_by({ created_by }, args, { db }, info) {
    return db.users.filter((user) => user.id === created_by)[0];
  },
};

module.exports = Course;
