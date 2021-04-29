using System;
using System.ComponentModel.DataAnnotations;

namespace beltExam2.Models
{
    public class Fan
    {
        [Key]
        public int FanId { get; set; }

        public int UserId { get; set; }

        public int HobbyId { get; set; }


        public Hobby Hobby { get; set; }
        public User User { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}