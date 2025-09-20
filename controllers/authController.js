// controllers/authController.js
exports.loginForm = (req, res) => {
  res.render('login', { error: null });
};

exports.registerForm = (req, res) => {
  res.render('register', { error: null });
};

exports.forgotForm = (req, res) => {
  res.render('forgot', { error: null });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // TODO: kiểm tra DB, tạm thời hardcode
  if (email === 'admin@gmail.com' && password === '123') {
    req.session.user = { email };
    return res.redirect('/suppliers');
  }

  res.render('login', { error: 'Sai tài khoản hoặc mật khẩu' });
};

exports.register = (req, res) => {
  const { email, password } = req.body;
  // TODO: lưu user vào DB
  console.log('New user:', email, password);
  res.redirect('/auth/login');
};

exports.forgot = (req, res) => {
  const { email } = req.body;
  // TODO: gửi mail reset password
  res.send(`Email reset đã được gửi tới: ${email}`);
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
};
