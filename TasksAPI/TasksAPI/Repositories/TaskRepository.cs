using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using TasksAPI.Models;
using TasksAPI.Settings;

namespace TasksAPI.Repositories
{
    public class TaskRepository : IRepository<Task>
    {
        private readonly IMongoCollection<Task> _tasks;

        public TaskRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _tasks = database.GetCollection<Task>("Tasks");
        }

        public IEnumerable<Task> Get() => _tasks.Find(task => true).ToList();
        public Task Get(string id) => _tasks.Find(task => task.Id == id).FirstOrDefault();
        public Task Create(Task value)
        {
            var newTask = (Task)value;
            _tasks.InsertOne(newTask);
            return newTask;
        }
        public void Update(string id, Task value)
        {
            var task = (Task)value;
            _tasks.ReplaceOne(task => task.Id == id, task);
        }
        public void Remove(string id) => _tasks.DeleteOne(task => task.Id == id);
        public void Remove(Task value)
        {
            var taskToDelete = (Task)value;
            _tasks.DeleteOne(task => task.Id == taskToDelete.Id);
        }

    }
}
