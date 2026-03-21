import json
import os
from models import Task

def load_tasks(filename: str):
    if(os.path.exists(filename)):
        with open(filename, 'r') as f:
            content = f.read().strip()
            if not content:
                return []
            tasks = json.loads(content)
        return [Task.from_dict(task) for task in tasks]
    else:
        return []

def save_tasks(filename: str, tasks: list):
    if(tasks != None):
        file = open(filename, 'w')
        json.dump([task.to_dict() for task in tasks], file)
    else:
        return []