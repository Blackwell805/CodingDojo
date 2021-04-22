using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using LoginAndRegistration.Models;

namespace LogReg.Controllers
{
    public class HomeController : Controller
    {
        private int? uid
        {
            get
            {
                return HttpContext.Session.GetInt32("UserId");
            }
        }

        private bool isLoggedIn
        {
            get
            {
                return uid != null;
            }
        }
        private LoginAndRegistrationContext db;
        public HomeController(LoginAndRegistrationContext context)
        {
            db = context;
        }


        ///////////////////
        [HttpPost("")]
        public IActionResult Index()
        {
            return View();
        }
        /////////////////////////
        //INSERT LOGIC FOR REGISTRATION
        ///////////////////////
        [HttpPost("register")]
        public IActionResult Register(User newUser)
        {
            if (ModelState.IsValid)
            {
                bool existingUser = db.Users.Any(u => u.Email == newUser.Email);
                if (existingUser)
                {
                    ModelState.AddModelError("Email", "is already in use...");
                }
            }
            if (ModelState.IsValid == false)
            {
                return View("Index");
            }
            PasswordHasher<User> hasher = new PasswordHasher<User>();
            newUser.Password = hasher.HashPassword(newUser, newUser.Password);
            db.Users.Add(newUser);
            db.SaveChanges();
            HttpContext.Session.SetInt32("UserId", newUser.UserId);
            return RedirectToAction("Success");
        }
        /////////////////////////
        ///////////////////////
        [HttpGet("")]
        public IActionResult IndexPath()
        {
            return View("Index");
        }
        /////////////////////////
        //INSERT LOGIC FOR REGISTRATION
        /////////////////////////
        [HttpPost("login")]
        public IActionResult Login(LoginUser loginUser)
        {
            string GenericErrMsg = "Invalid Email or Password";
            if (ModelState.IsValid == false)
            {
                return View("Login");
            }
            User dbUsers = db.Users.FirstOrDefault(u => u.Email == loginUser.LoginEmail);
            if (db.Users == null)
            {
                ModelState.AddModelError("LoginEmail", GenericErrMsg);
                return View("Login");
            }
            PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
            PasswordVerificationResult pwCompareResult = hasher.VerifyHashedPassword(loginUser, dbUsers.Password, loginUser.LoginPassword);
            if (pwCompareResult == 0)
            {
                ModelState.AddModelError("LoginEmail", GenericErrMsg);
                return View("Login");
            }
            HttpContext.Session.SetInt32("UserId", dbUsers.UserId);
            return RedirectToAction("Success");//redirection
        }
        ////////////////////
        /////////////////////
        [HttpGet("login")]
        public IActionResult LoginPath()
        {
            return View("Login");
        }
        /////////////////////
        [HttpGet("success")]
        public IActionResult Success()
        {
            if (!isLoggedIn)
            {
                return RedirectToAction("Index");
            }
            return View("Success");
        }
        ///////////////////////////////////////////////////////
        [HttpPost("logout")]
        ///////////////////////////////////////////////////////        
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
