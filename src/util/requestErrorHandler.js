const requestErrorHandler = (err) => {
  let result = {
    isErr: false,
    errMsg: null,
    route: null,
  };
  if (err) {
    result.isErr = true;
    result.errMsg = err;
  }
  if (err.response) {
    let errStat = err.response.status;
    if (errStat === 401) {
      localStorage.removeItem("token");
      result.route = "/login";
    } else if (errStat == 403) {
      result.route = "/unauthorized";
    } else if (errStat == 400) {
      result.errMsg = err.response.data;
    }
  }
  return result;
};

export default requestErrorHandler;
