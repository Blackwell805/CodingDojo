using Microsoft.AspNetCore.Mvc;
namespace portfolio2     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   //remember inheritance??
    {

        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpGet]
        [Route("projects")]
        public ViewResult projects()
        {
            return View("Projects");
        }


        [HttpGet]
        [Route("contacts")]
        public ViewResult contacts()
        {
            return View("Contacts");
        }
    }
}
