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
            List<Pet> allPets = new List<Pet>();

            return View("Index", allPets); //we pass the newly created variable to pass it into the view page. 
        }

        [HttpGet("pet")]
        public IActionResult Pet()
        {
            return View("NewPet");
        }
        public IActionResult Privacy()
        {
            return View();
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



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
