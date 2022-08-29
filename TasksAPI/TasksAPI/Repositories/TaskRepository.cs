using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using TasksAPI.Models;

namespace TasksAPI.Repositories
{
    public class TaskRepository : IRepository<Task, string>
    {
        private readonly IMongoCollection<Task> _tasks;

        public TaskRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _tasks = database.GetCollection<Task>(settings.CollectionName);
        }

        public IEnumerable<Task> Get() => _tasks.Find(task => true).ToList();
        public Task Get(string id) => _tasks.Find(task => task.Id == id).FirstOrDefault();
        public Task Create(Task newTask)
        {
            _tasks.InsertOne(newTask);
            return newTask;
        }
        public void Update(string id, Task tasks) => _tasks.ReplaceOne(task => task.Id == id, tasks);
        public void Remove(string id) => _tasks.DeleteOne(task => task.Id == id);
        public void Remove(Task taskToDelete) => _tasks.DeleteOne(task => task.Id == taskToDelete.Id);

    }
}
