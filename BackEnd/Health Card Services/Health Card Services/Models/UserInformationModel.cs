using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
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
        public int personalNumber { get; set; }
        public int familyNumber { get; set; }
        public Boolean valid { get; set; }

        public static implicit operator HttpContent(UserInformationModel v)
        {
            throw new NotImplementedException();
        }
    }
}
