using System.ComponentModel.DataAnnotations;
namespace validationsDojoSurvey.Models


{
    public class SurveyModel //Be sure this class name is the name of the file it's in.
    {
        [Required]
        [MinLength(2)]
        public string Name { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string Language { get; set; }
        [MinLength(20)]
        public string Comment { get; set; }
    }
}
