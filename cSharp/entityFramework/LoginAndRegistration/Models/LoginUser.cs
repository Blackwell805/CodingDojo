using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegistration.Models
{
    public class LoginUser
    {
        [Key] // the below prop is the primary key, [Key] is not needed if named with pattern: ModelNameId
        public int UserId { get; set; }
        ///
        [Display(Name = "Login Password")]
        [Required(ErrorMessage = "is required")]
        [MinLength(6, ErrorMessage = "must be at least 6 characters")]
        public string LoginPassword { get; set; }
        ///
        ///
        [Display(Name = "Login Email")]
        [Required(ErrorMessage = "is required")]
        [MinLength(2, ErrorMessage = "must be at least 2 characters")]
        public string LoginEmail { get; set; }
    }
    /////NO validation message for errors
}