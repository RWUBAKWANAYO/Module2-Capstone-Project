import displayCom from './countComments.js';

class FetchComments {
getComments = (id) => {
  const commentList = document.querySelector('.generate-comments');
  const appId = localStorage.getItem('app_id').replace(/['"]+/g, '');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        data.forEach((el) => {
          commentList.innerHTML += `<div>${el.creation_date} ${el.username}: ${el.comment}</div>
                `;
        });
        displayCom(data);
      }
    });
}

fetchComments = (id) => {
  const appId = localStorage.getItem('app_id').replace(/['"]+/g, '');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`;
  fetch(url)
    .then((res) => res.json()).then((data) => {
      displayCom(data);
      const commentList = document.querySelector('.generate-comments');
      commentList.innerHTML = '';
      data.forEach((el) => {
        commentList.innerHTML += `<div>${el.creation_date} ${el.username}: ${el.comment}</div>
                `;
      });
    });
};

postComments = ({ id, name, comment }) => {
  const appId = localStorage.getItem('app_id').replace(/['"]+/g, '');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  };
  fetch(url, config)
    .then(() => this.fetchComments(id));
}
}

export default FetchComments;