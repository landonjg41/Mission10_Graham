namespace APImission10.Models
{
    //the fules for the template
    public interface IBowlerRepo
    {
        IEnumerable<Bowler> GetBowlersForMarlinsAndSharks();
    }
}