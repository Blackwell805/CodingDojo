using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues.Where(l => l.Sport.Contains("Baseball")).ToList();
            return View();
        }


        [HttpGet("level_1")]
        public IActionResult Level1()
        {
                        ViewBag.AllWomenLeagues = _context.Leagues.Where(w => w.Name.Contains("Womens'")).ToList();
                        ViewBag.AnyTypeOfHockey = _context.Leagues.Where(h => h.Sport.Contains("Hockey")).ToList();
                        ViewBag.NotFootball = _context.Leagues.Where(h => !h.Sport.Contains( "Football")).ToList();
                        ViewBag.Conferences = _context.Leagues.Where(c => c.Name.Contains("Conference")).ToList();
                        ViewBag.AtlanticSide = _context.Leagues.Where(c => c.Name.Contains("Atlantic")).ToList();
                        ViewBag.Texas = _context.Teams.Where(c => c.Location == "Dallas").ToList();
                        ViewBag.Dinosaur = _context.Teams.Where(c => c.TeamName == "Raptors").ToList();
                        ViewBag.City =_context.Teams.Where(c => c.Location.Contains("City")).ToList();
                        ViewBag.T =_context.Teams.Where(c => c.TeamName.Contains("T")).ToList();
                        ViewBag.InOrder =_context.Teams.OrderBy(c => c.Location).ToList();
                        ViewBag.NotInOrder =_context.Teams.OrderByDescending(c => c.Location).ToList();
                        ViewBag.Coop =_context.Players.Where(c => c.LastName =="Cooper").ToList();
                        ViewBag.Joshing =_context.Players.Where(c => c.FirstName =="Joshua").ToList();
                        ViewBag.CoopNotJosh =_context.Players.Where(c => c.LastName =="Cooper").Where(d => d.FirstName != "Joshua").ToList();
                        ViewBag.OneOrTwo =_context.Players.Where(c => c.FirstName =="Alexander" || c.FirstName == "Wyatt").ToList();
                        
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            ViewBag.allTeams = _context.Leagues
            .Select(e=>e.Name.

            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}