using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TasksAPI.Models
{
    public interface IDatabaseSettings
    {
        public string ConnectionString
        {
            get => $"mongodb+srv://{User}:{Password}@{Host}";

        }
        public string Host { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string DatabaseName { get; set; }
        public string CollectionName { get; set; }
    }
}
