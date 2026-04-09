function logoutUser(req, res) {
  req.session.destroy(() => {
    res.redirect("/login");
  });
}

export default logoutUser;
