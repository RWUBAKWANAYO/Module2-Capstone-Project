const getDetail = (item) => {
  const popUp = document.querySelector('.pop-up-window');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  popUp.style.display = 'flex';
  popUp.innerHTML = `<div class="pop-up"><div id="close">&times</div>
    <div class="pop-up-img"><img src=${item.logos.light} alt="logo"/></div>
    <div class="card-description"><h1>${item.name}</h1></div>
    <div class="details"><p><b>slug: </b>${item.slug}</p><p><b>abbr: </b>${item.abbr}</p></div>
    </div>
`;
  const btn = document.querySelector('#close');
  btn.onclick = () => {
    popUp.style.display = 'none';
    body.style.overflow = 'scroll';
  };
};

export default getDetail;