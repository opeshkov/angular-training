type menuItem = { title: string, items: (string | menuItem)[]};
type menu = menuItem[];

function createMenu(menuStructure: menu, containerId: string): void {
  const container = document.getElementById(containerId);
  const ul = document.createElement('ul');
  ul.className = 'menu'
  for (let mainItem of menuStructure) {
    const li = createMenuItem();
    li.innerText = mainItem.title;
    ul.appendChild(li);
    createSubMenu(mainItem.items, li);
  }
  container.appendChild(ul);
}

function createSubMenu(items: (string | menuItem)[], container: HTMLElement) : void {
  const ul = document.createElement('ul');
  ul.className = 'submenu';
  ul.style.display = 'none';
  for (let item of items) {
    const li = createMenuItem();
    if (typeof item === 'string') {
      li.innerText = item;
    } else {
      li.innerText = item.title;
      createSubMenu(item.items, li);
    }
    ul.appendChild(li);
  }
  container.appendChild(ul);
}

function createMenuItem() : HTMLElement {
  const li = document.createElement('li');
  li.className = 'menu-item';
  li.addEventListener('click', clickHandler);
  return li;
}

function clickHandler(e) {
  let submenus = e.target.getElementsByClassName('submenu')
  if (submenus.length) {
    // Toggle current submenu state
    const submenu = submenus[0]
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none'
    } else {
      submenu.style.display = 'block'
    }
  } else {
    // Close all submenus
    submenus = document.getElementsByClassName('submenu')
    for (let submenu of submenus) {
      submenu.style.display = 'none'
    }
  }
  e.stopPropagation()
}

//  Test data

const menuList : menu = [
  { title: 'JavaScript', items: ['Angular', 'React'] },
  { title: 'Dart', items: [{title: 'Angular', items: ['Item1', 'Item2']}, 'Polymer'] }
];

createMenu(menuList, 'menuContainer');