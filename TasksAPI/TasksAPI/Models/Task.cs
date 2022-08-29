using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace TasksAPI.Models
{
    

    public enum State
    {
        ACTIVE, COMPLETED, DELETED
    }

    public class Task
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public State State { get; set; }
    }
}
