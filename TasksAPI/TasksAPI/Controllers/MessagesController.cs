using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TasksAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        [HttpGet("public")]
        public IActionResult Public()
        {
            return Ok(new
            {
                Message = "Hello from a public  endpoint! You don't need to be authenticated to see this."
            });
        }
        
        [HttpGet("protected")]
        [Authorize]
        public IActionResult Protected()
        {
            return Ok(new
            {
                Message = "Hello from a protected endpoint! You need to be authenticated to see this."
            });
        }

        [HttpGet("protected-scoped")]
        [Authorize("read:messages")]
        public IActionResult Scoped()
        {
            return Ok(new
            {
                Message = "Hello from a protected endpoint! You need to be authenticated and have a scope of read:messages to see this."
            });
        }
    }
}
