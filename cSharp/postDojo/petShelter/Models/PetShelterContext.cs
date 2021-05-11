using Microsoft.EntityFrameworkCore;
namespace petShelter.Models
{
    public class PetShelterContext : DbContext
    {
        public PetShelterContext(DbContextOptions options) : base(options) { }

        // for every model / entity that is going to be part of the db
        // the names of these properties will be the names of the tables in the db
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Owner> Owners { get; set; }



    }
}