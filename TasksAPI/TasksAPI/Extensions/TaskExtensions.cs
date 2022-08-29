using System;
using System.Collections.Generic;
using System.Linq;
using TasksAPI.DTOs;
using TasksAPI.Models;

namespace TasksAPI.Extensions
{
    public static class TaskExtensions
    {
        public static TaskDTO toDTO(this Task task)
        {
            return new TaskDTO
            {
                TaskId = task.Id,
                TaskDescription = task.Description,
                TaskDate = task.Date,
                TaskState = task.State.ToString()
            };
        }

        public static Task toTask(this TaskDTO taskDTO)
        {
            var task = new Task
            {
                Id = taskDTO.TaskId,
                Description = taskDTO.TaskDescription,
                Date = taskDTO.TaskDate
            };
            switch (taskDTO.TaskState.ToUpper())
            {
                case "ACTIVE":
                    {
                        task.State = State.ACTIVE;
                        break;
                    }
                case "COMPLETED":
                    {
                        task.State = State.COMPLETED;
                        break;
                    }
                case "DELETED":
                    {
                        task.State = State.DELETED;
                        break;
                    }
            }
            return task;
        }
    }
}
