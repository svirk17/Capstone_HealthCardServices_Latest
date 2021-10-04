using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Health_Card_Services.Models
{
    public class ApplicationSettings
    {
        public String JWT_Secret { get; set; }
        public String Client_URL { get; set; }
    }
}
