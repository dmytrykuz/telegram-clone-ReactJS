import { userApi } from "utils/api";
import { notification } from "utils/helpers";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),

  setIsAuth: (bool) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),

  fetchUserData: () => (dispatch) => {
    userApi
      .getMe()
      .then(({ data }) => {
        dispatch(Actions.setUserData(data));
      })
      .catch((err) => {
        if (err.response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },

  fetchUserLogin: (userData) => (dispatch) => {
    return userApi
      .login(userData)
      .then(({ data }) => {
        const { token } = data;
        notification({
          title: "Авторизація пройшла успішно!",
          text: "З поверненням)",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        notification({
          title: "Помилка авторизації!",
          text: "Неправильний логін або пароль",
          type: "error",
        });
      });
  },
  
  fetchUserRegistration: (userData) => () => {
    return userApi.registration(userData);
  },
};

export default Actions;
