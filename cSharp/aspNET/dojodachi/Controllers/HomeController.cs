using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dojodachi.Models;
using Microsoft.AspNetCore.Http;


namespace dojodachi
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        MyDachi creature = new MyDachi() { };
        //////////////////////////////////////////////////////////////////
        [HttpGet("")]
        public IActionResult Index()
        {
            MyDachi sesssionDachi = HttpContext.Session.GetObjectFromJson<MyDachi>("MyDachi");
            if (HttpContext.Session.GetString("GameStatus") == null)
            {
                HttpContext.Session.SetString("GameStatus", "Playing");
            }

            if (sesssionDachi == null)
            {
                MyDachi newDachi = new MyDachi();
                HttpContext.Session.SetObjectAsJson("MyDachi", newDachi);
                return View("Index", newDachi);
            }
            return View("Index", sesssionDachi);
        }
        //////////////////////////////////////////////////////////////////
        [HttpPost("/feed")]
        public IActionResult Feed()
        {
            MyDachi sessionDachi = HttpContext.Session.GetObjectFromJson<MyDachi>("MyDachi");
            sessionDachi.Feed(HttpContext.Session);
            return RedirectToAction("Index");
        }

        //////////////////////////////////////////////////////////////////
        [HttpPost("/play")]
        public IActionResult Play()
        {
            MyDachi sessionDachi = HttpContext.Session.GetObjectFromJson<MyDachi>("MyDachi");
            sessionDachi.Play(HttpContext.Session);
            return RedirectToAction("Index");
        }

        [HttpPost("/sleep")]
        public IActionResult Sleep()
        {
            MyDachi sessionDachi = HttpContext.Session.GetObjectFromJson<MyDachi>("MyDachi");
            sessionDachi.Sleep(HttpContext.Session);
            return RedirectToAction("Index");
        }
        //////////////////////////////////////////////////////////////////
        [HttpPost("/work")]
        public IActionResult Work()
        {
            MyDachi sessionDachi = HttpContext.Session.GetObjectFromJson<MyDachi>("MyDachi");
            sessionDachi.Work(HttpContext.Session);
            return RedirectToAction("Index");
        }

        //////////////////////////////////////////////////////////////////
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
