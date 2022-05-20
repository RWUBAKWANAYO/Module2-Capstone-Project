import FetchComments from './commentsAPI.js';

const getDetail = (item) => {
  const popUp = document.querySelector('.pop-up-window');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  popUp.style.display = 'flex';
  popUp.innerHTML = `<div class="pop-up" id=${item.id}>
    <div id="close">&times</div>
    <div class="pop-up-img"><img src=${item.logos.light} alt="logo"/></div>
      <div class="detail-cont">
        <div class="card-name"><h1>${item.name}</h1></div>
        <div class="details"><p><b>slug: </b>${item.slug}</p><p><b>abbr: </b>${item.abbr}</p></div>
        <div class="comment-counter">Comments</div>
        <div class="generate-comments"></div>
        <div class="add-comment">Add a comment</div>
        <input type="text" id="name" placeholder="Your name">
        <textarea id="txt-area" placeholder="Your insights"></textarea>
        <button class="sendComment">Comment</button>
      </div>
    </div>
`;
  const closeBtn = document.querySelector('#close');
  const sendComment = document.querySelector('.sendComment');

  closeBtn.onclick = () => {
    popUp.style.display = 'none';
    body.style.overflow = 'scroll';
  };

  sendComment.onclick = (e) => {
    e.preventDefault();
    const { id } = item;
    const comments = new FetchComments();
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#txt-area').value;
    if (name.length > 0 && comment.length > 0) {
      comments.postComments({ id, name, comment });
    }
  };
};
export default getDetail;