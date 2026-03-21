class Task:
    def __init__(self, task_id: int, title: str, completed: bool = False):
        self.task_id = task_id
        self.title = title
        self.completed = completed

    def mark_completed(self):
        self.completed = True

    def __str__(self):
        if(self.completed == True):
            return f" [ { self.task_id } ] { self.title } ✅" 
        else:
            return f" [ { self.task_id } ] { self.title } ❌" 
    
    def to_dict(self):
        return {"task_id": self.task_id,
                "title": self.title,
                "completed": self.completed
                 }

    @classmethod
    def from_dict(cls, data: dict):
        return Task(data["task_id"],data["title"],data["completed"])
    

class TaskManager:
    def __init__(self, tasks=None):
        if(tasks == None):
            self.tasks = []
        else:
            self.tasks = tasks

    def _get_next_id(self):
        if(self.tasks == []):
            return 1
        else:
            return max(task.task_id for task in self.tasks) + 1

    def add_task(self, title: str):
        self.tasks.append(Task(self._get_next_id(), title, False))

    def list_tasks(self):
        for task in self.tasks:
            print(task)

    def complete_task(self, task_id: int):
        for task in self.tasks: 
            if(task.task_id == task_id):
                task.completed = True
                return True
        return False
    
    def delete_task(self, task_id: int) -> bool:
        for task in self.tasks: 
            if(task.task_id == task_id):
                self.tasks.remove(task)
                return True
        return False
    