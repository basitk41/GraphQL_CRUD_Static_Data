module.exports = `
type Message {
    success:Boolean,
    message:String,
    data:User
}
type User {
  id: Int
  name: String
  job_title: String
}
type Query {
  getUsers: [User],
  getUser(id:Int): Message
}
type Mutation {
    addUser(id:Int, name:String, job_title:String): Message,
    deleteUser(id:Int): Message,
    updateUser(id:Int, name:String, job_title:String): Message
}
`;
