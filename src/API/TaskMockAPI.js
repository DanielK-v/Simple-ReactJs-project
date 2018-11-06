import TaskModel from '../components/Tasks/TaskModel';
import UserMockAPI from '../API/UserMockAPI';

export default class TaskMockAPI{
    static generateId() {
        return Math.floor(Math.random() * (10001 - 1 + 1)) + 1;
      }

      static seed() {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
    
        if (!tasks || tasks.length === 0) {
          let seedTasks = [
            new TaskModel("Task 1", "Test 1", TaskMockAPI.generateId(), false),
            new TaskModel("Task 2", "Test 2", TaskMockAPI.generateId(), false),
            new TaskModel("Task 3", "Test 3", TaskMockAPI.generateId(), false),
          ];
    
          let jsonTasks = JSON.stringify(seedTasks);
          localStorage.setItem("tasks", jsonTasks);
        }
      }

      static getById(id) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let tasks = localStorage.getItem("tasks");
            let jsonTasks = JSON.parse(tasks);
    
            let result = jsonTasks.find(t => t.id == id);
    
            resolve(result);
          }, 1000);
        });
      }

      static getAll() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let tasks = localStorage.getItem("tasks");
            tasks = JSON.parse(tasks);
    
            if (!tasks || tasks.length === 0) {
              resolve([]);
            } else {
              resolve(tasks);
            }
          }, 1000);
        });
      }
      static getByAuthorId(id) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let alltasks = JSON.parse(localStorage.getItem("tasks"));
    
            let result = alltasks.filter(t => t.authorId === id);
    
            resolve(result);
          }, 1000);
        });
      }

      static save(task) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let allTasks = JSON.parse(localStorage.getItem("tasks"));
            if (task.id) {
              let index = allTasks.findIndex(t => t.id === task.id);
              allTasks[index] = task;
            } else {
              task.id = TaskMockAPI.generateId();
              task.authorId = UserMockAPI.getLoggedUserID();
              allTasks.push(task);
            }
    
            let jsonTasks = JSON.stringify(allTasks);
            localStorage.setItem("tasks", jsonTasks);
    
            resolve();
          }, 1000);
        });
      }

      static delete(id) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            let index = tasks.findIndex(t => t.id === id);
            tasks.splice(index, 1);
    
            let jsonTasks = JSON.stringify(tasks);
            localStorage.setItem("tasks", jsonTasks);
    
            resolve();
          });
        });
      }

      static completeTask(id){

        return new Promise((resolve,reject)=>{
          setTimeout(() => {
            let tasks = JSON.parse(localStorage.getItem("tasks"));

            let index = tasks.findIndex(t => t.id == id);
            tasks[index].isDone = true;

            resolve();
        },1500);
      });
    }

  }