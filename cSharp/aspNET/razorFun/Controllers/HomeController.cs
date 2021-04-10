using Microsoft.AspNetCore.Mvc;

namespace razorFun.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public ViewResult Index()
        {
            return View(); // View is a build in function! This is not because the folder name is Views. It's because ViewResult. They are tied.  
            //by default on empty () it looks for:
            //Views/Home/Index.cshtml
            // if it was return View("hello")
            // it would be looking for:
            //Views/Home/hello.cshtml
            //views/Shared/hello.cshtml
        }
    }
}
