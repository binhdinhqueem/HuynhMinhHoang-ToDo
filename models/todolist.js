export default class TodoList {
    constructor() {
      this.listtodo = [];
    }
  
    findIndex(id) {
      {
        return this.listtodo.findIndex((tdo) => tdo.id === id);
      }
    }
  
    add(todoin) {
      this.listtodo.push({ ...todoin, id: "", type: "incomplete" });
    }
  
    delete(id) {
      this.listtodo.filter((item) => item.id !== id);
    }
  }
  