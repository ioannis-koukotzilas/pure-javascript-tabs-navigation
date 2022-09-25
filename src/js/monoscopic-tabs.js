// (A) Top level function.
function monoscopicTabs(target) {
  // (B) Get HTML elements.
  const tabs = document.getElementById(target);
  const navItem = tabs.querySelectorAll('.tabs-nav > li');
  const tab = tabs.querySelectorAll('.tabs-content > div');

  // (C) Add attributes and onclick event.
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.add('tabs-nav__item');
    tab[i].classList.add('tabs-content__item');
    navItem[i].onclick = () => {
      for (let j = 0; j < navItem.length; j++) {
        if (i == j) {
          navItem[j].classList.add('active');
          tab[j].classList.add('active');
        } else {
          navItem[j].classList.remove('active');
          tab[j].classList.remove('active');
        }
      }
    };
  }

  // (D) Set default open tab if none is defined.
  if (tabs.querySelector('.active') == null) {
    navItem[0].classList.add('active');
    tab[0].classList.add('active');
  }
}

// (E) Init new tabs navigation component.
monoscopicTabs('tabs');
