using APImission10.Models;
using Microsoft.EntityFrameworkCore;

namespace APImission10.Models
    {
public class EFBowlerRepo : IBowlerRepo
    {
        private BowlingLeagueContext _context;
        public EFBowlerRepo(BowlingLeagueContext temp)
        {
            _context = temp;
        }
        public IEnumerable<Bowler> GetBowlersForMarlinsAndSharks()
        {
            return _context.Bowlers
                .Include(b => b.Team) // Include the Team navigation property
                .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList(); // Execute query and return as list
        }
    }
}


