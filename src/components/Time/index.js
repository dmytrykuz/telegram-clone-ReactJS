import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from "date-fns/locale";

const Time = ({ date }) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ru,
  });
};

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;
