using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegistration.Models
{
    public class User
    {
        [Key] // the below prop is the primary key, [Key] is not needed if named with pattern: ModelNameId
        public int UserId { get; set; }
        ///
        [Display(Name = "First Name")]
        [Required(ErrorMessage = "is required")]
        [MinLength(2, ErrorMessage = "must be at least 2 characters")]
        public string FirstName { get; set; }
        ///
        [Display(Name = "Last Name")]
        [Required(ErrorMessage = "is required")]
        [MinLength(2, ErrorMessage = "must be at least 2 characters")]
        public string LastName { get; set; }
        ///
        [Display(Name = "Password")]
        [Required(ErrorMessage = "is required")]
        [MinLength(8, ErrorMessage = "must be at least 8 characters")]
        public string Password { get; set; }
        ///
        [Display(Name = "Confirm Password")]
        [NotMapped]// don't add to DB
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Doesn't match password")]
        public string ConfirmPassword { get; set; }
        ///
        [Display(Name = "Email")]
        [Required(ErrorMessage = "is required")]
        [MinLength(5, ErrorMessage = "must be at least 5 characters")]
        [EmailAddress(ErrorMessage = "not a valid email address")]
        public string Email { get; set; }


        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}