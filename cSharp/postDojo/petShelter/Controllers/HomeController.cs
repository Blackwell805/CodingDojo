using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using petShelter.Models;

namespace petShelter.Controllers
{
    public class HomeController : Controller
    {
        private PetShelterContext _context;

        public HomeController(PetShelterContext context)
        {
            _context = context;
        }

        [HttpGet("/")] //review what is happening here and how it relates to the POST
        public IActionResult Index()
        {
            var model = new PetViewModel
            {
                Pets = _context.Pets
                .Include(p => p.Owner)
                .ToList(),
                Owners = _context.Owners
                .Include(o => o.Pet)
                .ToList()
            };

            return View("Index", model); //we pass the newly created variable to pass it into the view page. 
        }

        [HttpGet("pet")]
        public IActionResult Pet()
        {
            return View("NewPet");
        }


        [HttpPost("/pet/new")]
        public IActionResult Create(Pet newPet)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newPet);
                _context.SaveChanges();
                return RedirectToAction("Index", new { id = newPet.PetId });
            }
            else
            {
                if (newPet.Name == null)
                {
                    ModelState.TryAddModelError("Name", "The Name field is required");
                }
                return View("NewPet", newPet);
            }

        }

        [HttpGet("pet/{PetId}")]
        public IActionResult Detail(int PetId)
        {
            var singlePet = new PetViewModel
            {
                Animal = _context.Pets
            .Include(d => d.PetId == PetId)
            .FirstOrDefault()

            };
            return View("Pet");
        }

        [HttpGet("/pet/own")]

        public IActionResult Own()
        {
            return View("NewOwner");
        }

        [HttpPost("/pet/owner")]
        public IActionResult Owner(Owner newOwner)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newOwner);
                _context.SaveChanges();
                return RedirectToAction("Index", new { IDbContextFactory = newOwner.OwnerId });
            }
            else
            {
                if (newOwner.FullName() == null)
                {
                    ModelState.TryAddModelError("Name", "Need a name entered");
                }
                return View("Index", newOwner);
            }
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
