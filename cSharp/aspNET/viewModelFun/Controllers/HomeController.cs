using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using viewModelFun.Models;



namespace viewModelFun.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            HomeParagraph someParagraph = new HomeParagraph()
            {
                paragraph = "Once upon a time, there was a software developer. He was new. He was young. Kinda. But he knew things. Because he tried things. And those things made him laugh."
            };
            return View(someParagraph);
        }

        [HttpGet]
        [Route("numbers")]
        public IActionResult Numbers()
        {
            Random rand = new Random();
            int[] numbers = new int[10];
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = rand.Next(0, 10);
            }
            return View("Numbers", numbers);
        }

        [HttpGet]
        [Route("users")]
        public IActionResult Names()
        {
            List<string> FullName = new List<string>()
            {
            "Austin Blackwell",
            "Alayne Smith",
            "Bruce Banner",
            "Abby Princess"
            };
            return View("Users", FullName); //We are passing multiple items through. We put "Users".
        }
        [HttpGet]
        [Route("user")]
        public IActionResult UserView() //the function name should be whatever the View name is.
        {
            UserModel UserName = new UserModel()
            {
                Name = "Austin Blackwell",
            };
            return View(UserName); //We are passing a single item through. No need for "User".
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
