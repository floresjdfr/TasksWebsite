﻿using System.Collections.Generic;

namespace TasksAPI.Repositories
{
    public interface IRepository<T>
    {
        public IEnumerable<T> Get();
        public T Get(string id);
        public T Create(T newItem);
        public void Update(string id, T updatedValue);
        public void Remove(string id);
        public void Remove(T itemToDelete);
    }
}
