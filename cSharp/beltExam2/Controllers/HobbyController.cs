using System.Collections.Generic;
using System.Linq;
using beltExam2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace beltExam2.Controllers
{
    public class HobbyController : Controller
    {
        private ExamContext _context;
        public HobbyController(ExamContext context)
        {
            _context = context;
        }

        [HttpGet("hobby")]
        public IActionResult Index()
        {
            int? loggedInID = HttpContext.Session.GetInt32("userId");
            if (loggedInID == null)
            {
                return RedirectToAction("Index", "Home");
            }

            List<Hobby> allHobbies = _context.Hobbies
                .Include(e => e.User)
                .Include(e => e.Fans)
                    .ThenInclude(p => p.User)
                .OrderBy(e => e.UpdatedAt) //check here there's an issue in the table
                .ToList();

            User loggedInUser = _context.Users
                .Include(u => u.CreatedHobbies)
                    .ThenInclude(e => e.User)
                .FirstOrDefault(e => e.UserId == loggedInID);

            Hobby userCreated = _context.Hobbies
                .Include(e => e.User)
                .FirstOrDefault(e => e.UserId == (int)loggedInID);

            HobbyViewModel viewModel = new HobbyViewModel()
            {
                Hobbies = allHobbies,
                User = loggedInUser,
                Hobby = userCreated
            };
            return View("Dashboard", viewModel);
        }

        [HttpGet("hobby/new")]
        public IActionResult New()
        {
            int? loggedInID = HttpContext.Session.GetInt32("userId");
            if (loggedInID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        [HttpPost("hobby/create")]
        public IActionResult Create(Hobby newHobby)
        {
            int? loggedInID = HttpContext.Session.GetInt32("userId");
            if (loggedInID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            if (ModelState.IsValid)
            {
                newHobby.UserId = (int)loggedInID;
                _context.Add(newHobby);
                _context.SaveChanges();
                return RedirectToAction("Hobby", new { id = newHobby.HobbyId });
            }
            else
            {
                if (newHobby.Name == null)
                {
                    ModelState.AddModelError("Name", "The Name field is required.");
                }
                return View("New", newHobby);
            }
        }

        [HttpGet("hobby/{id:int}")]
        public IActionResult Hobby(int id)
        {
            int? loggedInID = HttpContext.Session.GetInt32("userId");
            if (loggedInID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            Hobby activity = _context.Hobbies
            .Include(e => e.User)
            .Include(e => e.Fans)
                .ThenInclude(p => p.User)
            .FirstOrDefault(e => e.HobbyId == id);

            if (activity == null)
            {
                return RedirectToAction("Index");
            }
            return View("Hobby", activity);
        }

        [HttpPost("hobby/{id:int}/join")]
        public IActionResult Join(int id)
        {
            int? loggedInID = HttpContext.Session.GetInt32("userId");
            if (loggedInID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            Hobby activity = _context.Hobbies
            .Include(e => e.User)
            .Include(e => e.Fans)
                .ThenInclude(p => p.User)
            .FirstOrDefault(e => e.HobbyId == id);

            activity.Fans.Add(new Fan()
            {
                UserId = (int)loggedInID,
                HobbyId = activity.HobbyId
            });

            _context.SaveChanges();
            return RedirectToAction("Hobby");
        }

        [HttpPost("hobby/{id:int}/leave")]
        public IActionResult Leave(int id)
        {
            int? loggedIntID = HttpContext.Session.GetInt32("userId");
            if (loggedIntID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            Hobby activity = _context.Hobbies
            .Include(e => e.User)
            .Include(e => e.Fans)
                .ThenInclude(p => p.User)
            .FirstOrDefault(e => e.HobbyId == id);

            Fan toRemove = _context.Fans
                .FirstOrDefault(g => g.HobbyId == activity.HobbyId && g.UserId == (int)loggedIntID);
            activity.Fans.Remove(toRemove);
            _context.SaveChanges();
            return RedirectToAction("Hobby");
        }




    }
}