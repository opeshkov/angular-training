type menuItem = { title: string, items: (string | menuItem)[]};
type menu = menuItem[];

function createMenu(menuStructure: menu, containerId: string): HTMLUListElement {
  const container: HTMLDivElement = document.getElementById(containerId) as HTMLDivElement;
  const ul = document.createElement('ul');

  ul.className = 'menu';

  for (const mainItem of menuStructure) {
    const li = createMenuItem();
    li.innerText = mainItem.title;
    ul.appendChild(li);
    createSubMenu(mainItem.items, li);
  }

  return container.appendChild(ul);
}

function createSubMenu(items: (string | menuItem)[], container: HTMLElement): HTMLUListElement {
  const ul = document.createElement('ul');
  ul.className = 'submenu';
  ul.style.display = 'none';

  for (const item of items) {
    const li = createMenuItem();
    if (typeof item === 'string') {
      li.innerText = item;
    } else {
      li.innerText = item.title;
      createSubMenu(item.items, li);
    }
    ul.appendChild(li);
  }

  return container.appendChild(ul);
}

function createMenuItem(): HTMLElement {
  const li = document.createElement('li');
  li.className = 'menu-item';
  li.addEventListener('click', clickHandler);

  return li;
}

function clickHandler(e: MouseEvent) {
  e.stopPropagation();

  const currentElement = e.target as HTMLElement;
  let submenus: HTMLCollection = currentElement.getElementsByClassName('submenu');

  if (submenus.length) {
    // Toggle current submenu state
    const submenu = submenus[0] as HTMLElement;
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none'
    } else {
      submenu.style.display = 'block'
    }
  } else {
    // Close all submenus
    submenus = document.getElementsByClassName('submenu')
    for (let submenu of Array.prototype.slice.call(submenus)) {
      submenu.style.display = 'none'
    }
  }

}

//  Test data

const menuList : menu = [
  { title: 'JavaScript', items: ['Angular', 'React'] },
  { title: 'Dart', items: [{title: 'Angular', items: ['Item1', 'Item2']}, 'Polymer'] }
];

createMenu(menuList, 'menuContainer');