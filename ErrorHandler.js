export const ErrorHandler = (req, res, next) => {
  const { firstName, lastName, password, email, phone } = req.body;

  if (!firstName || !lastName || !password || !email || !phone) {
    res.status(400).json({ err: "All fields are mandatory!", data: null });
  }

  if (!/[A-Z]/.test(firstName.slice(0, 1)) || !/[A-Z]/.test(lastName.slice(0, 1))) {
    res.status(400).json({ err: "First letter should be Capital", data: null });
  }
  if (password.length < 8 || !/[!@#$%^&*()]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    res.status(400).json({ err: "Password should contain a special character, one uppercase letter and one numeric and have length more than 8 characters", data: null });
  }

  if (!/[@]/.test(email)) {
    res.status(400).json({ err: "Email should contain @", data: null });
  }

  if (phone.length != 10) {
    res.status(400).json({ err: "Phone number should have 10 digit", data: null });
  }

  next();
};
