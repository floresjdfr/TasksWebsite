using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TasksAPI.DTOs;
using TasksAPI.Repositories;
using TaskModel = TasksAPI.Models.Task;
using TasksAPI.Extensions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TasksAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskRepository _taskRepository;

        public TaskController(TaskRepository taskService)
        {
            _taskRepository = taskService;
        }

        // GET: api/<TaskController>
        [HttpGet]
        public IEnumerable<TaskDTO> Get() => _taskRepository.Get().Select(task => task.toDTO());

        // GET api/<TaskController>/5
        [HttpGet("{id}")]
        public ActionResult<TaskDTO> Get(string id)
        {
            var item = _taskRepository.Get(id);

            if (item is null)
                return NotFound();
            else
                return item.toDTO();
        }

        // POST api/<TaskController>
        [HttpPost]
        public ActionResult<TaskDTO> Post([FromBody] TaskDTO value)
        {
            var createdValue = _taskRepository.Create(value.toTask());
            return CreatedAtAction(nameof(Get), new { id = createdValue.Id.ToString() }, createdValue.toDTO());
        }

        // PUT api/<TaskController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] TaskDTO value) => _taskRepository.Update(id, value.toTask());

        // DELETE api/<TaskController>/5
        [HttpDelete("{id}")]
        public void Delete(string id) => _taskRepository.Remove(id);
    }
}
