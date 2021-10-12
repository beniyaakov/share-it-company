import React, { useEffect } from 'react';
import './Games.css';

function Games() {
  var cards,
    nCards,
    cover,
    openContent,
    openContentText,
    pageIsOpen = false,
    openContentImage,
    closeContent,
    windowWidth,
    windowHeight,
    currentCard;

  useEffect(() => {
    init();
  }, [init]);

  function init() {
    resize();
    selectElements();
    attachListeners();
  }

  function selectElements() {
    cards = document.getElementsByClassName('card');
    nCards = cards.length;
    cover = document.getElementById('cover');
    openContent = document.getElementById('open-content');
    openContentText = document.getElementById('open-content-text');
    openContentImage = document.getElementById('open-content-image');
    closeContent = document.getElementById('close-content');
  }

  useEffect(() => {
    attachListeners();
  }, [attachListeners, closeContent]);

  function attachListeners() {
    for (var i = 0; i < nCards; i++) {
      attachListenerToCard(i);
    }
    closeContent?.addEventListener('click', onCloseClick);
    window.addEventListener('resize', resize);
  }

  useEffect(() => {
    attachListenerToCard();
  }, [attachListenerToCard]);

  function attachListenerToCard(i) {
    cards[i]?.addEventListener('click', function (e) {
      var card = getCardElement(e.target);
      onCardClick(card, i);
    });
  }

  /* When a card is clicked */
  function onCardClick(card, i) {
    currentCard = card;
    currentCard.className += ' clicked';
    setTimeout(function () {
      animateCoverUp(currentCard);
    }, 500);
    animateOtherCards(currentCard, true);
    openContent.className += ' open';
  }

  function animateCoverUp(card) {
    var cardPosition = card.getBoundingClientRect();
    var cardStyle = getComputedStyle(card);
    setCoverPosition(cardPosition);
    setCoverColor(cardStyle);
    scaleCoverToFillWindow(cardPosition);
    openContentText.innerHTML =
      '<h1>' + card.children[2].textContent + '</h1>' + paragraphText;
    openContentImage.src = card.children[1].src;
    setTimeout(function () {
      window.scroll(0, 0);
      pageIsOpen = true;
    }, 300);
  }

  function animateCoverBack(card) {
    var cardPosition = card?.getBoundingClientRect();
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
    cover.style.transform =
      'scaleX(' +
      1 +
      ') scaleY(' +
      1 +
      ') translate3d(' +
      0 +
      'px, ' +
      0 +
      'px, 0px)';
    setTimeout(function () {
      openContentText.innerHTML = '';
      openContentImage.src = '';
      cover.style.width = '0px';
      cover.style.height = '0px';
      pageIsOpen = false;
      currentCard.className = currentCard?.className.replace(' clicked', '');
    }, 301);
  }

  function setCoverPosition(cardPosition) {
    cover.style.left = cardPosition?.left + 'px';
    cover.style.top = cardPosition?.top + 'px';
    cover.style.width = cardPosition?.width + 'px';
    cover.style.height = cardPosition?.height + 'px';
  }

  function setCoverColor(cardStyle) {
    cover.style.backgroundColor = cardStyle.backgroundColor;
  }

  function scaleCoverToFillWindow(cardPosition) {
    var scaleX = windowWidth / cardPosition?.width;
    var scaleY = windowHeight / cardPosition?.height;
    var offsetX =
      (windowWidth / 2 - cardPosition?.width / 2 - cardPosition?.left) / scaleX;
    var offsetY =
      (windowHeight / 2 - cardPosition?.height / 2 - cardPosition?.top) /
      scaleY;
    cover.style.transform =
      'scaleX(' +
      scaleX +
      ') scaleY(' +
      scaleY +
      ') translate3d(' +
      offsetX +
      'px, ' +
      offsetY +
      'px, 0px)';
  }

  /* When the close is clicked */
  function onCloseClick() {
    openContent.className = openContent.className.replace(' open', '');
    animateCoverBack(currentCard);
    animateOtherCards(currentCard, false);
  }

  function animateOtherCards(card, out) {
    var delay = 100;
    for (var i = 0; i < nCards; i++) {
      if (cards[i] === card) continue;
      if (out) animateOutCard(cards[i], delay);
      else animateInCard(cards[i], delay);
      delay += 100;
    }
  }

  function animateOutCard(card, delay) {
    setTimeout(function () {
      card.className += ' out';
    }, delay);
  }

  function animateInCard(card, delay) {
    setTimeout(function () {
      card.className = card.className.replace(' out', '');
    }, delay);
  }

  function getCardElement(el) {
    if (el.className.indexOf('card ') > -1) return el;
    else return getCardElement(el.parentElement);
  }

  function resize() {
    if (pageIsOpen) {
      var cardPosition = currentCard.getBoundingClientRect();
      setCoverPosition(cardPosition);
      scaleCoverToFillWindow(cardPosition);
    }
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  }

  var paragraphText =
    "<p>Somebody once told me the world is gonna roll me. I ain't the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb in the shape of an \"L\" on her forehead. Well the years start coming and they don't stop coming. Fed to the rules and I hit the ground running. Didn't make sense not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see. So what's wrong with taking the back streets? You'll never know if you don't go. You'll never shine if you don't glow.</p><p>Hey now, you're an all-star, get your game on, go play. Hey now, you're a rock star, get the show on, get paid. And all that glitters is gold. Only shooting stars break the mold.</p><p>It's a cool place and they say it gets colder. You're bundled up now, wait till you get older. But the meteor men beg to differ. Judging by the hole in the satellite picture. The ice we skate is getting pretty thin. The water's getting warm so you might as well swim. My world's on fire, how about yours? That's the way I like it and I never get bored.</p>";

  return (
    <>
      {/* <div> */}
      <>
        <h1 style={{ textAlign: 'center' }}>בואו ללמוד תוך כדי משחק</h1>
        <h2 style={{ textAlign: 'center' }}>
          ?בא לכם ללמוד אבל אין לכם כוח לקרוא דפים שלמים של דוקומנטציות
        </h2>

        <h3 style={{ textAlign: 'center' }}>
          שייר איט מציג לכם את המשחקים הפופולארים ביותר כדי ללמוד לקודד
        </h3>

        <div className='container'>
          <div className='card-column column-0'>
            <div className={`card card-color-1`}>
              <div className='border'></div>
              <iframe
                src='http://www.flexboxdefense.com/'
                frameborder='0'
              ></iframe>
              <h2>improve your css abilities with war game</h2>
            </div>
            <div className={`card card-color-1`}>
              <div className='border'></div>
              <iframe src='https://cssgridgarden.com/' frameborder='0'></iframe>
              <h2>grid garden css game</h2>
            </div>
          </div>
          <div className='card-column column-1'>
            <div className={`card card-color-1`}>
              <div className='border'></div>
              <iframe src='https://flexboxfroggy.com/' frameborder='0'></iframe>
              <h2>(froggy game) play flex-box game to improve css abilities</h2>
            </div>
            <div className={`card card-color-1`}>
              <div className='border'></div>
              <iframe
                src='https://flukeout.github.io/'
                frameborder='0'
              ></iframe>
              <h2>
                play the selectors game to understand more types of selectors
              </h2>
            </div>
          </div>
          <div className='card-column column-2'>
            <div className={`card card-color-1`}>
              <div className='border'></div>
              <iframe
                src='https://learngitbranching.js.org/'
                frameborder='0'
              ></iframe>
              <h2>Hey now, you're an allstar</h2>
            </div>
            <div className={`card card-color-1`}>
              <div className='border'></div>
              <iframe src='https://cssbattle.dev/' frameborder='0'></iframe>
              <h2>play something related to css</h2>
            </div>
          </div>
        </div>

        <div id='cover' className='cover'></div>

        <div id='open-content' className='open-content'>
          {/* <a href='#' id='close-content' className='close-content'> */}
          <a
            href='#'
            id='close-content'
            className='close-content'
            onClick={() => window.location.reload()}
          >
            <span className='x-1'></span>
            <span className='x-2'></span>
          </a>
          <iframe
            id='open-content-image'
            src=''
            width='100%'
            height='700px'
            frameborder='0'
          ></iframe>
          {/* <img  src='https://yehudabayana.github.io/portfolio/' /> */}
          <div className='text' id='open-content-text'></div>
        </div>
      </>
    </>
  );
}

export default Games;

{
  /* <div className='card-column column-1'>
<div className='card card-color-1'>
<div className='border'></div>
<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg' />
<h1>Get your game on, go play</h1>
</div>
<div className='card card-color-3'>
<div className='border'></div>
<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg' />
<h1>Get the show on, get paid</h1>
</div>
</div> */
}

{
  /* <div className='coursesBtn'>
  <Button type='primary' ghost onClick={fullStackStudents}>
    FullStack
  </Button>
  <Button type='primary' ghost onClick={qaStudents}>
    QA
  </Button>
  <Button type='primary' ghost onClick={socStudents}>
    SOC
  </Button>
  <Button type='primary' ghost onClick={salesforceStudents}>
    SalesForce
  </Button>
  <Button type='primary' ghost onClick={devnetStudents}>
    Devnet
  </Button>
</div>

<Button type='primary' onClick={showModal} style={{ marginTop: '10px' }}>
  אוסף אותי
</Button> */
}
