const displayCom = (data) => {
  const dispCount = document.querySelector('.comment-counter');
  dispCount.innerHTML = `Comments(${data.length})`;
  return data.length;
};
export default displayCom;