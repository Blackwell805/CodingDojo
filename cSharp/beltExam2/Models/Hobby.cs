using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace beltExam2.Models
{
    public class Hobby
    {
        [Key]
        public int HobbyId { get; set; }

        [Required(ErrorMessage = "Name of Hobby is required!")]
        [MinLength(2, ErrorMessage = "Name of Hobby must be 2 characters or longer!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "You gotta describe what the Hobby is!")]
        public string Description { get; set; }



        public int UserId { get; set; }


        public User User { get; set; }
        public List<Fan> Fans { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}