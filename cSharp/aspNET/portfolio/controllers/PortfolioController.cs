using Microsoft.AspNetCore.Mvc;

namespace Portfolio
{
    public class PortfolioController : Controller
    {

        [Route("")] // home route
        [HttpGet]

        public string Index() //to make it run the Time Display assignment, type ViewResult where string is at
        {
            return ("This is my Index"); //put back View function to run time display
        }

        [Route("projects")] //localhost:5000 projects
        [HttpGet]

        public string projects()
        {
            return ("This is my projects!"); 
        }

        [Route("contact")] // localhost contacts
        [HttpGet]

        public string contact()
        {
            return ("This is my contact!");
        }
    }
}