const arr = [
  { id: 1, name: "Basit", job_title: "Engineer" },
  { id: 2, name: "Ali", job_title: "Lawyer" },
];
module.exports = {
  getUsers: () => arr,
  getUser: (args) => {
    const index = arr.findIndex((x) => x.id === args.id);
    if (index === -1)
      return {
        success: false,
        message: "Record not found!",
        data: args,
      };
    else {
      return {
        success: true,
        message: "Record deleted!",
        data: arr[index],
      };
    }
  },
  addUser: (args) => {
    arr.push(args);
    return {
      success: true,
      message: "Record added!",
      data: args,
    };
  },
  deleteUser: (args) => {
    const index = arr.findIndex((x) => x.id === args.id);
    if (index === -1)
      return {
        success: false,
        message: "Record not found!",
        data: args,
      };
    else {
      const res = arr.splice(index, 1);
      return {
        success: true,
        message: "Record deleted!",
        data: res[0],
      };
    }
  },
  updateUser: (args) => {
    const index = arr.findIndex((x) => x.id === args.id);
    if (index === -1)
      return {
        success: false,
        message: "Record not found!",
        data: { id: args.id },
      };
    else {
      arr.splice(index, 1, args);
      return {
        success: true,
        message: "Record updated!",
        data: arr[index],
      };
    }
  },
};
