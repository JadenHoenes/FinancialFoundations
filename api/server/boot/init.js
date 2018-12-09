module.exports = function(app) {
  var User = app.models.User;
  User.create({email: 'admin@financialfoundations.com', password: 'test', emailVerified: true}, function(err, userInstance) {
    console.log(userInstance);
  });
}
