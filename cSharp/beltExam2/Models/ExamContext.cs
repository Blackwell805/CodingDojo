using Microsoft.EntityFrameworkCore;

namespace beltExam2.Models
{
    public class ExamContext : DbContext
    {
        public ExamContext(DbContextOptions options) : base(options) { }

        // for every model / entity that is going to be part of the db
        // the names of these properties will be the names of the tables in the db
        public DbSet<User> Users { get; set; }
        public DbSet<Hobby> Hobbies { get; set; }
        public DbSet<Fan> Fans { get; set; }

    }
}