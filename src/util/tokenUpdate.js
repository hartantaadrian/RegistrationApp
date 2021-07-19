const tokenUpdate = (token) => {
  console.log(token);
  localStorage.removeItem("token");
  localStorage.setItem("token", token);
};

export default tokenUpdate;
