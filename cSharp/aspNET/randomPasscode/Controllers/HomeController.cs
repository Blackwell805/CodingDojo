using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using randomPasscode.Models;
using Microsoft.AspNetCore.Http;

namespace randomPasscode.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]

        public IActionResult Index()
        {

            string characters = HttpContext.Session.GetString("characters");
            int? count = HttpContext.Session.GetInt32("count");
            string aString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

            Random random = new Random();
            string passcode = "";
            for (int i = 0; i < 14; i++)
            {
                passcode += aString[random.Next(aString.Length)];
            }


            if (count == null) //In this step we are checking for the presense of data in session. If it's not there == null, if so, we increase it.
            {
                count = 1;
            }
            else
            {
                count++;
            }
            ViewBag.Count = count;
            HttpContext.Session.SetInt32("count", (int)count);
            ViewBag.Passcode = passcode;

            return View("Index");
        }

        // [HttpPost("/random")]
        // public IActionResult Generate()
        // {
        //     return View("Index");
        // }

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
