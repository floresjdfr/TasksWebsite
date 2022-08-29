using System;
using System.Collections.Generic;
using System.Linq;


namespace TasksAPI.Repositories
{
    /// <summary>
    /// Repository Interface with basic methods
    /// </summary>
    /// <typeparam name="T">Type that the repository hadles</typeparam>
    /// <typeparam name="G">T's id type</typeparam>
    public interface IRepository<T, G>
    {
        public IEnumerable<T> Get();
        public T Get(G id);
        public T Create(T newItem);
        public void Update(G id, T updatedValue);
        public void Remove(G id);
        public void Remove(T itemToDelete);
    }
}
