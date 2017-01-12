/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var ian: ToDoList.IPerson = {
    name: "Ian J",
    email: "ianjravin@gmail.com"
  }

  var nombz: ToDoList.IPerson = {
    name: "Nombz",
    email: "nombumurage@gmail.com"
  }

  var cate: ToDoList.IPerson = {
    name: "Cate k",
    email: "catekariuki@gmail.com"
  }

  export var people = {
    "Cate": cate,
    "Nombz":nombz,
    "Ian": ian
  };
}
