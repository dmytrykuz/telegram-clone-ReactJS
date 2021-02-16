import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { userApi } from "utils/api";
import { Result, Button } from "antd";
import { Wrapper } from "components";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        message: "Аккаунт успішно підтверджено!",
      };
    } else {
      return {
        status: "error",
        message: "Помилка при підтвердженні!",
      };
    }
  } else {
    return {
      message:
        "На Ваш e-mail відправлено лист з посиланням для підтвердження реєстрації",
    };
  }
};

const CheckEmail = ({ location, history }) => {
  const [verified, setVerified] = useState(false);
  const hash = location.search.split("hash=")[1];
  const info = renderTextInfo(hash, verified);

  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  });

  return (
    <Wrapper>
      <div className="auth__success-block">
        <Result
          status={info.status}
          title={info.message}
          extra={info.status === "success" && verified && <Button type="primary" size="large" onClick={() => history.push("/login")}>Ввійти</Button>}
        />
      </div>
    </Wrapper>
  );
};

export default withRouter(CheckEmail);
