using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TasksAPI.Models;

namespace TasksAPI.DTOs
{
    public class TaskDTO
    {
        public string TaskId { get; set; }
        public string TaskDescription { get; set; }
        public DateTime TaskDate { get; set; }
        public string TaskState { get; set; }
    }
}
