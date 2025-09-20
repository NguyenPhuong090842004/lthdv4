// controllers/authController.js

// mảng users tạm (chỉ lưu khi server đang chạy, restart thì mất)
let users = [];

exports.loginForm = (req, res) => {
  res.render('login', { error: null });
};

exports.registerForm = (req, res) => {
  res.render('register', { error: null });
};

exports.forgotForm = (req, res) => {
  res.render('forgot', { error: null });
};

// ---- LOGIN ----
exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    req.session.user = { email };
    return res.redirect('/suppliers');
  }

  res.render('login', { error: 'Sai tài khoản hoặc mật khẩu' });
};

// ---- REGISTER ----
exports.register = (req, res) => {
  const { email, password } = req.body;

  // kiểm tra trùng email
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.render('register', { error: 'Email đã tồn tại' });
  }

  // thêm user mới
  users.push({ email, password });
  console.log('Danh sách users:', users);

  res.redirect('/auth/login');
};

// ---- FORGOT ----
exports.forgot = (req, res) => {
  const { email } = req.body;
  res.send(`Email reset đã được gửi tới: ${email}`);
};

// ---- LOGOUT ----
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
};
