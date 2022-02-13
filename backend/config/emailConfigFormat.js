module.exports = {
  secret: "some-secret-key",
  senderEmail: "some@email.com",
  senderPasword: "some-password",
  service: "gmail",
  url: "http://localhost:8080/api/auth/confirm",
};

/*
  Important: To use Gmail with nodemailer, 
  you’ll have to enable the access for less secure apps, otherwise it won’t send any emails.
  https://www.google.com/settings/security/lesssecureapps
*/
