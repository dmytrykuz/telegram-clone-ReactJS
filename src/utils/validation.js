export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введіть ваш E-mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Невірний E-mail адрес";
      }
    },
    fullname: (value) => {
      if (!isAuth && !value) {
        errors.fullname = "Вкажіть ім'я та прізвище";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введіть пароль";
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Пароль занадто простий";
      }
    },
    confirm: (value) => {
      if (!isAuth && value !== values.password) {
        errors.confirm = "Пароли не совпадают";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
