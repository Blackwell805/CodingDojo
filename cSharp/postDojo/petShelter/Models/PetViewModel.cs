using System.Collections.Generic;

namespace petShelter.Models
{
    public class PetViewModel
    {
        public Pet Animal { get; set; }
        public List<Pet> Pets { get; set; }
        public List<Owner> Owners { get; set; }
        public Owner Owner { get; set; }
    }
}