using System.Collections.Generic;

namespace beltExam2.Models
{
    public class HobbyViewModel
    {
        public List<Hobby> Hobbies { get; set; }
        public List<Fan> Fans { get; set; }
        public User User { get; set; }
        public Hobby Hobby { get; set; }
    }
}