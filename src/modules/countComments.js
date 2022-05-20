const displayCom = (arr) => {
  const dispCount = document.querySelector('.comment-counter');
  dispCount.innerHTML = `Comments(${arr.length})`;
};

export default displayCom;