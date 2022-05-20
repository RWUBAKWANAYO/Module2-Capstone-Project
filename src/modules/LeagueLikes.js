import { applicationId, InvolvementBaseUrl } from './credentials.js';

class LeagueLikes {
  constructor(likeId, likes) {
    this.likeId = likeId;
    this.likes = likes;
  }

    postLike = (likeId) => {
      const appId = applicationId.replace(/['"]+/g, '');
      const url = InvolvementBaseUrl.replace(/['"]+/g, '');
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset="utf-8"',
        },
        body: JSON.stringify({ item_id: likeId }),
      };
      fetch(`${url}/apps/${appId}/likes/`, config).then(() => this.fetchLikes());
    };

      fetchLikes = () => {
        const appId = applicationId.replace(/['"]+/g, '');
        const url = InvolvementBaseUrl.replace(/['"]+/g, '');
        fetch(`${url}/apps/${appId}/likes/`).then((res) => res.json()).then((likes) => this.upDateUILikes(likes));
      };

      upDateUILikes = (likes) => likes.forEach((el) => {
        const card = document.getElementById(el.item_id);
        const likeElement = card.querySelector('.likes-number');
        likeElement.innerHTML = `${el.likes} likes`;
      });
}

export default LeagueLikes;