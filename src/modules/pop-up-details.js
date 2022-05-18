const getDetail = (item) => {
  const popUp = document.querySelector('.pop-up-window');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  popUp.style.display = 'flex';
  popUp.innerHTML = `<div class="pop-up"><div id="close">&times</div>
    <div class="pop-up-img"><img src=${item.logos.light} alt="logo"/></div>
    <div class="card-name"><h1>${item.name}</h1></div>
    <div class="details"><p><b>slug: </b>${item.slug}</p><p><b>abbr: </b>${item.abbr}</p></div>
    <div class="comment-counter">Comments</div>
    <div class="generate-comments"></div>
    <div class="add-comment">Add a comment</div>
    <input type="text" id="name" placeholder="Your name">
    <textarea id="txt-area" placeholder="Your insights"></textarea>
    <button class="comment-button">Comment</button>
    </div>
`;
  const btn = document.querySelector('#close');
  btn.onclick = () => {
    popUp.style.display = 'none';
    body.style.overflow = 'scroll';
  };
};

export default getDetail;