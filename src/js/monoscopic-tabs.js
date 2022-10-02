// Top level function.
function monoscopicTabs(target) {
  // Get HTML elements.
  const tabs = document.getElementById(target);
  const navListItem = tabs.querySelectorAll('.tabs .nav > li');
  const tabsPanel = tabs.querySelectorAll('.tabs .panels > div');

  // Add attributes and onclick event.
  for (let i = 0; i < navListItem.length; i++) {
    navListItem[i].classList.add('list-item');
    tabsPanel[i].classList.add('list-item');
    navListItem[i].onclick = () => {
      for (let j = 0; j < navListItem.length; j++) {
        if (i == j) {
          navListItem[j].classList.add('active');
          tabsPanel[j].classList.add('active');
        } else {
          navListItem[j].classList.remove('active');
          tabsPanel[j].classList.remove('active');
        }
      }
    };
  }

  // Set default open tab if none is defined.
  if (tabs.querySelector('.active') == null) {
    navListItem[0].classList.add('active');
    tabsPanel[0].classList.add('active');
  }
}

// Init new tabs navigation component.
monoscopicTabs('tabs');
