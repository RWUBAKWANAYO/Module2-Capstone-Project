const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const getDetail = (item) => {
  const popUp = document.querySelector('.pop-up-window');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  popUp.style.display = 'flex';
  popUp.innerHTML = `<div class="pop-up">
    <div id="close">&times</div>
    <div class="pop-up-img"><img src=${item.logos.light} alt="logo"/></div>
    <div class="card-name"><h1>${item.name}</h1></div>
    <div class="details"><p><b>slug: </b>${item.slug}</p><p><b>abbr: </b>${item.abbr}</p></div>
    <div class="comment-counter">Comments</div>
    <div class="generate-comments"></div>
    <div class="add-comment">Add a comment</div>
    <input type="text" id="name" placeholder="Your name">
    <textarea id="txt-area" placeholder="Your insights"></textarea>

   

    <button class="commentBtn">Comment</button>

    </div>
`;
  const closeBtn = document.querySelector('#close');
  const cmtBtn = document.querySelector('.commentBtn');

  closeBtn.onclick = () => {
    popUp.style.display = 'none';
    body.style.overflow = 'scroll';
  };

  cmtBtn.onclick = () => {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/:app_id/comments')
  }
};
export default getDetail;