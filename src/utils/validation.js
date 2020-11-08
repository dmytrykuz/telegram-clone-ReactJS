const validation = ({ isAuth, values, errors }) => {
  const rules = {
    email: (errors, value) => {
      if (!value) {
        errors.email = "Введіть ваш E-mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Невірний E-mail адрес";
      }
    },

    password: (errors, value, isAuth) => {
      if (!value) {
        errors.password = "Введіть пароль";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(
          value
        )
      ) {
        errors.password =
          "Пароль повинен складатися з восьми або більше символів латинського алфавіту, містити великі і малі літери, цифри.";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validation;
