using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using TasksAPI.Models;
using TasksAPI.Settings;

namespace TasksAPI.Repositories
{
    public class UserRepository : IRepository<User>
    {
        private readonly IMongoCollection<User> _users;

        public UserRepository(IDatabaseSettings settings)
        {
            
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _users = database.GetCollection<User>("Users");
        }

        public User Create(User newItem)
        {
            _users.InsertOne(newItem);
            return newItem;
        }

        public IEnumerable<User> Get()
        {
            return _users.Find(user => true).ToList();
        }

        public User Get(string id)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(string id)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(User itemToDelete)
        {
            throw new System.NotImplementedException();
        }

        public void Update(string id, User updatedValue)
        {
            throw new System.NotImplementedException();
        }
    }
}
