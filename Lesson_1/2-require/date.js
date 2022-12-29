function getDate() {
  return new Date();
}

function getMonth() {
  return new Date().getMonth() + 1;
}

module.exports = {
  getDate,
  getMonth
}