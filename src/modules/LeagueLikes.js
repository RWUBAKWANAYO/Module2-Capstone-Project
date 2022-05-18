class LeagueLikes {
  constructor(likeId, likes) {
    this.likeId = likeId;
    this.likes = likes;
  }

  InvolvementBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

    postLike = (likeId) => {
      const appId = localStorage.getItem('app_id').replace(/['"]+/g, '');
      const url = this.InvolvementBaseUrl.replace(/['"]+/g, '');
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
        let appId = localStorage.getItem('app_id');
        if (!appId) return;
        appId = appId.replace(/['"]+/g, '');
        const url = this.InvolvementBaseUrl.replace(/['"]+/g, '');
        fetch(`${url}/apps/${appId}/likes/`).then((res) => res.json()).then((likes) => this.upDateUILikes(likes));
      };

      upDateUILikes = (likes) => likes.forEach((el) => {
        const card = document.getElementById(el.item_id);
        const likeElement = card.querySelector('.likes-number');
        likeElement.innerHTML = `${el.likes} likes`;
      });
}

export default LeagueLikes;