import displayCom from './countComments.js';
import { applicationId, InvolvementBaseUrl } from './credentials.js';

class FetchComments {
getComments = (id) => {
  const commentList = document.querySelector('.generate-comments');
  const appId = applicationId.replace(/['"]+/g, '');
  const url = InvolvementBaseUrl.replace(/['"]+/g, '');
  fetch(`${url}/apps/${appId}/comments?item_id=${id}`)
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
  const appId = applicationId.replace(/['"]+/g, '');
  const url = InvolvementBaseUrl.replace(/['"]+/g, '');
  fetch(`${url}/apps/${appId}/comments?item_id=${id}`)
    .then((res) => res.json()).then((data) => {
      displayCom(data);
      const commentList = document.querySelector('.generate-comments');
      commentList.innerHTML = '';
      data.forEach((el) => {
        commentList.innerHTML += `<div>${el.creation_date.replace('-', '/')} ${el.username}: ${el.comment}</div>
                `;
      });
    });
};

postComments = ({ id, name, comment }) => {
  const appId = applicationId.replace(/['"]+/g, '');
  const url = InvolvementBaseUrl.replace(/['"]+/g, '');
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
  fetch(`${url}/apps/${appId}/comments/`, config)
    .then(() => this.fetchComments(id));
}
}

export default FetchComments;