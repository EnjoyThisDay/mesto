export default class Section {
    constructor({ items,  renderer}, selector) {
        this._items = items;
        this._selector = selector;
        this._renderer = renderer;
        console.log(this._items);
    }
  
    renderElement() {
        this._items.forEach((item) => {
        this._renderer(item);
    });
    }
  
    addItem(element) {
            this._selector.append(element);
    }
  
  }