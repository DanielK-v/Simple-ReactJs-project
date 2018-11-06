export default class TaskModel {
    constructor(title, descrription, id, isDone, time, authorId) {
      this.id = id || null;
      this.title = title;
      this.description = descrription;
      this.authorId = authorId || null;
      this.creationDate = new Date().toLocaleTimeString();
      this.isDone = isDone;
    }
  }