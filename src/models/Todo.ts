export class Todo {
  id: string;
  title: string;
  desc: string;
  isDone: boolean;
  date: number;

  constructor(title: string, desc: string, isDone = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.desc = desc;  
    this.isDone = isDone;
    this.date = Date.now();
    
  }
}
//UUID/GUID -> Unika IDn