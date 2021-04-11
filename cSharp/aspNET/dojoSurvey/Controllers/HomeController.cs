using System;
using Microsoft.AspNetCore.Mvc;

namespace dojoSurvey //be sure to use your own project's namespace!
{
    public class HomeController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpPost("result")]
        public IActionResult ResultPage(string name, string location, string language, string comment)
        {
            ViewBag.SubmittedInfo = ("Submitted Infomation");
            ViewBag.Name = (name);
            ViewBag.Location = (location);
            ViewBag.Language = (language);
            ViewBag.Comment = (comment);
            return View("Result");
        }


    }

}
