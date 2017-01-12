/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High", people.Cate));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "High", people.Cate));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "Low", people.Cate));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.Ian));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.Nombz));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.Cate));
tasks.push(new ToDoList.WorkTask(today, "Grab lattes.", "High", people.Cate));
tasks.push(new ToDoList.WorkTask(tomorrow, "Clean up Nombz and Ian's Githubs", "Medium", people.Cate));
tasks.push(new ToDoList.WorkTask(nextDay, "Perfect Nombz and Ian's LinkedIn profiles", "Low", people.Cate));

console.log(tasks);
var cateTasks = ToDoList.describeTasksForPerson(people.Cate, tasks);
console.log("Here are all of the things our lovely Cate must do to appease us: ");
for(var task of cateTasks) {
  console.log(task);
}
