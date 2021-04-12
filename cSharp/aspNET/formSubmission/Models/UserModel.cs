using System.ComponentModel.DataAnnotations;
namespace formSubmission.Models

{
    public class UserModel
    {
        [Required]
        [MinLength(4)]
        public string FirstName { get; set; }
        [Required]
        [MinLength(4)]
        public string LastName { get; set; }
        [Required]
        [Range(0, 100)]
        public int Age { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)] //this is how we cover the characters when password is being typed in.
        public string Password { get; set; }

    }
}