using APImission10.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace APImission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController: ControllerBase
    {
        private IBowlerRepo _bowlerRepo;
        public BowlerController(IBowlerRepo temp)
        {
            _bowlerRepo = temp;
        }

        [HttpGet("marlins-sharks")]
        public IActionResult GetBowlersForMarlinsAndSharks()
        {
            var bowlers = _bowlerRepo.GetBowlersForMarlinsAndSharks();
            return Ok(bowlers);
        }
    }
}
