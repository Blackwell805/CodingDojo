using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using validationsDojoSurvey.Models;

namespace validationsDojoSurvey.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


        [HttpGet("")]
        public IActionResult Index()//consider making the file names contain the word they are coming from. Example: This Index function could be IndexView instead. Same thing applies to the models and controllers. 
        {
            return View(); //View is a built in function. Keep it as is. Inside the parathesis will be the view page that you want to render.
        }

        [HttpPost("result")]
        public IActionResult ResultPage(SurveyModel user) //This is being passed over from the SurveyModel class. Because of this, we do not need create the variable of Name, Location, Language, Comment here. 
        {
            if (ModelState.IsValid)
            {
                Console.WriteLine("Hellllooooo");
                return View("Result", user);//Technically, this is am action step. But we don't have a database set up yet. Therefore, we render the result through a views page. 
            }
            else
            {
                ViewBag.SubmittedInfo = ("Submitted Infomation");
                return View("Index");
            }
        }

        [HttpGet("result")]
        public IActionResult Success()
        {
            return View("Result");
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