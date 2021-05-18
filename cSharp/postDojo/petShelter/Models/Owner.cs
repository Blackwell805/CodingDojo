using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace petShelter.Models
{
    public class Owner
    {
        [Key]
        public int OwnerId { get; set; }

        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Pet Pet { get; set; }
        List<Pet> MyPets { get; set; }

        public string FullName()
        {
            return FirstName + " " + LastName;
        }

    }
}