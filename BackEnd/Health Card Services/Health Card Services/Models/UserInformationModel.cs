using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Health_Card_Services.Models
{
    public class UserInformationModel
    {
        public int Id { get; set; }
        public String firstName { get; set; }
        public String lastName { get; set; }
        public String address { get; set; }
        public String phoneNumber { get; set; }
        public String emailAddress { get; set; }
        public DateTime dob { get; set; }
        public String userName { get; set; }
        public String password { get; set; }

    }
}
