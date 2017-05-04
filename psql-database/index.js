var User = require('./models/user.js');
var Student = require('./models/student.js');

// ADMIN PAGE: ADD USER
User.forge({
  email: '123abc@example.com',
  password: '123',
  first_name: 'John',
  last_name: 'Doe',
  phone_number: '18001234567',
  role: 'admin',
  salt: '123SADF908',
}).save().then(function(newRow) {
  console.log(newRow.id); // Returns ID of new row
}).catch(function(err) {
  console.log(err);
});

// LOGIN PAGE: GET USER BY EMAIL
User.forge({email: '123abc@example.com'})
.fetch({require: true})
.then(function (user) {
    console.log('user info:', user);
})
.catch(function (err) {
  console.log('message:', err.message);
});

/*
USE DATABASE COMMAND BELOW TO CLEAR ALL TABLES...
DROP TABLE IF EXISTS users, students, users_students CASCADE;
*/


/*
// ADMIN PAGE: DELETE USER BY EMAIL
User.forge({email: 'abc123@example.com'})
.fetch({require: true})
.then(function (category) {
  category.destroy()
  .then(function () {
    console.log('Category successfully deleted');
  })
  .catch(function (err) {
    console.log('message:', err.message);
  });
})
.catch(function (err) {
  console.log('message:', err.message);
});
// ADMIN PAGE: ADD STUDENT
Student.forge({
  first_name: 'Jimmy',
  last_name: 'John'
}).save().then(function(newRow) {
  console.log(newRow.id); // Returns ID of new row
}).catch(function(err) {
  console.log(err);
});
// ADMIN PAGE: GET ALL USERS
User.collection().fetch().then(function(users) {
   console.log(JSON.stringify(users)); // collection of users
});
// ADMIN PAGE: GET ALL STUDENTS
Student.collection().fetch().then(function(users) {
   console.log(JSON.stringify(users)); // collection of users
});
// ADMIN PAGE: DELETE USER BY ID
User.forge({id: 1}).fetch().then(function (item) {
  return item.destroy().then(function () {
      console.log('destroyed!');
    });
});
// ADMIN PAGE: DELETE STUDENT BY ID
Student.forge({id: 1}).fetch().then(function (item) {
  return item.destroy().then(function () {
      console.log('destroyed!');
    });
});
*/