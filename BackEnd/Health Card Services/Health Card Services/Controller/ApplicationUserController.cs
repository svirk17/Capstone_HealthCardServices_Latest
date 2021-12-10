using Health_Card_Services.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Health_Card_Services.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationSettings _appSettings;
        //creating the variable to generate random health card numbers.
        Random rnd = new Random();


        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
        }

        //Method to create a user account in the database.
        [HttpPost]
        [Route("Register")]
        //POST: /api/ApplicationUser/CreateAccount
        public async Task<Object> PostUserInformation(UserInformationModel model)
        {
            //creating the variable to generate random health card numbers.
            Random rnd = new Random();

            //Retrieving the user information entered.
            var applicationUser = new ApplicationUser()
            {
                UserName = model.userName,
                firstName = model.firstName,
                lastName = model.lastName,
                address = model.address,
                dob = model.dob,
                PhoneNumber = model.phoneNumber,
                Email = model.emailAddress,
                valid = true,
                familyNumber = rnd.Next(1, 999999),
                Id = rnd.Next(1,999999).ToString() //personal health number becomes the ID of the person in the database.
            };

            if(model.familyNumber != 0)
            {
                applicationUser.familyNumber = model.familyNumber;
            }

            //Entering the user information into the database.
            try
            {
                var result =  await _userManager.CreateAsync(applicationUser, model.password);
                SendEmail(model.emailAddress, "A Health Card Services account has successfully been created for you.");
            }
            catch (Exception)
            {
                throw;
            }

            String returnString = "Your Health Services account has been successfully created.";
            return returnString;
        }

        [HttpPost]
        [Route("Login")]
        //POST: /api/ApplicationUser/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.userName);
            if((user != null) && await _userManager.CheckPasswordAsync(user, model.password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(180),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });

            }
            else
            {
                return BadRequest(new { message = "Username or password is incorrect." });
            }
        }

        /*   
           [HttpPost]
           [Route("SendEmail")]
           //POST: /api/ApplicationUser/SendEmail
           public async Task<IActionResult> SendEmail(LoginModel model)
           {
               var user = await _userManager.FindByNameAsync(model.userName);
               if((user != null) && await _userManager.CheckPasswordAsync(user, model.password))
               {
                   try
                   {
                       MailMessage message = new MailMessage();
                       SmtpClient smtp = new SmtpClient();
                       message.From = new MailAddress("capstonetestemail5@gmail.com");
                       message.To.Add(new MailAddress("capstonetestemail5@gmail.com"));
                       message.Subject = "Test";
                       message.IsBodyHtml = true; //to make message body as html  
                       message.Body = "Login successful";
                       smtp.Port = 587;
                       smtp.Host = "smtp.gmail.com"; //for gmail host  
                       smtp.EnableSsl = true;
                       smtp.UseDefaultCredentials = false;
                       smtp.Credentials = new NetworkCredential("capstonetestemail5@gmail.com", "pennstate5210");
                       smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                       smtp.Send(message);
                       return Ok("Email sent successfully");

                   }
                   catch (Exception e) {

                       return BadRequest(new { message = "Email could not be sent." });
                   }

              }
               else
               {
                   return BadRequest(new { message = "User not found." });
               }
           }
        */

        public bool SendEmail(String emailAddress, String emailBody)
        {
           try
                {
                    MailMessage message = new MailMessage();
                    SmtpClient smtp = new SmtpClient();
                    message.From = new MailAddress("capstonetestemail5@gmail.com");
                    message.To.Add(new MailAddress(emailAddress));
                    message.Subject = "Health Card Services Email";
                    message.IsBodyHtml = true; //to make message body as html  
                    message.Body = emailBody;
                    smtp.Port = 587;
                    smtp.Host = "smtp.gmail.com"; //for gmail host  
                    smtp.EnableSsl = true;
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new NetworkCredential("capstonetestemail5@gmail.com", "pennstate5210");
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtp.Send(message);
                    return true;

                }
                catch (Exception e)
                {

                    return false;
                }

            }
            
        

        [HttpPost]
        [Route("RenewPreviousCard")]
        //POST: /api/ApplicationUser/RenewPreviousCard
        public async Task<IActionResult> RenewPreviousCard(ApplicationUser userModel)
        {
            var user = await _userManager.FindByIdAsync((userModel.Id).ToString());
         
            if (user != null) 
            {
                try
                {
                    user.valid = true;
                    await _userManager.UpdateAsync(user);
                    SendEmail(user.Email, "An application to renew your health card has been received. Someone from the health services team will contact you " +
                        "if further information is required. Otherwise, you will receive your health card in mail in 3-4 weeks. Thanks!");
                    Console.WriteLine("SUCCESS");
                    return Ok();
                   
                }
                catch (Exception e)
                {
                    Console.WriteLine("FAILED:EXCEPTION TOUCHED" + userModel.Id);
                    return BadRequest(new { message = "Record could not be updated." });
                }

            }
            else
            {
                Console.WriteLine("FAILED:EXCEPTION TOUCHED LAST" + userModel.Id);
                return BadRequest(new { message = "Sorry, user could not be found." });
            }
        }

        [HttpPost]
        [Route("CancelCard")]
        //POST: /api/ApplicationUser/CancelCard
        public async Task<IActionResult> CancelCard(ApplicationUser userModel)
        {
            var user = await _userManager.FindByIdAsync((userModel.Id).ToString());

            if (user != null)
            {
                try
                {
                    user.valid = false;
                    await _userManager.UpdateAsync(user);
                    SendEmail(user.Email, "An application to cancel your health card has been received. A confirmation for the cancellation" +
                        "will be mailed to you in 2-3 weeks. Thanks!");
                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(new { message = "Record could not be updated." });
                }

            }
            else
            {
                return BadRequest(new { message = "Sorry, user could not be found." });
            }
        }

        [HttpPost]
        [Route("UpdateAccountInfo")]
        //POST: /api/ApplicationUser/UpdateAccountInfo
        public async Task<IActionResult> UpdateAccountInfo(ApplicationUser userModel)
        {
            var user = await _userManager.FindByIdAsync((userModel.Id).ToString());
           
            if (user != null)
            {
                try
                {
                    if(!string.IsNullOrEmpty(userModel.address))
                    {
                        user.address = userModel.address;
                    }

                    if (!string.IsNullOrEmpty(userModel.PhoneNumber))
                    {
                        user.PhoneNumber = userModel.PhoneNumber;
                    }

                    if (!string.IsNullOrEmpty(userModel.Email))
                    {
                        user.Email = userModel.Email;
                    }

                    await _userManager.UpdateAsync(user);
                    SendEmail(user.Email, "Your health card account information has been updated. A new health card with the updated information will " +
                        "be mailed to you in 2-3 weeks. Thanks!");
                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(new { message = userModel.address });
                }

            }
            else
            {
                return BadRequest(new { message = "Sorry, user could not be found." });
            }
        }

        [HttpPost]
        [Route("FirstRegistration")]

        //POST: /api/ApplicationUser/FirstRegistration
        public async Task<Object> FirstRegistration(ApplicationUser model)
        {


            //var user = await _userManager.FindByIdAsync((model.Id).ToString());
            var user = await _userManager.FindByNameAsync(model.UserName.ToString());
           

            if (user != null)
            {
                try
                {
                    user.address = model.address;               
                    user.PhoneNumber = model.PhoneNumber;                
                    user.Email = model.Email;
                    user.valid = true;
                    user.familyNumber = rnd.Next(1, 999999);

                    await _userManager.UpdateAsync(user);
                    SendEmail(user.Email, "An application for first-time registration of the health card has been recieved. Someone from the health services " +
                        "team will contact you if more information is required. Otherwise, your health card will be mailed to you in 2-3 weeks. Thanks!");
                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(new { message = "Sorry, account couldn't be created." });
                }

            }
            else
            {
                return BadRequest(new { message = "Sorry, user could not be found." });
            }
            
        }

        [HttpPost]
        [Route("LinkAccount")]
        //POST: /api/ApplicationUser/UpdateAccountInfo
        public async Task<IActionResult> LinkAccount(ApplicationUser userModel)
        {
            var user = await _userManager.FindByIdAsync((userModel.Id).ToString());
            var relatedUser = await _userManager.FindByIdAsync(userModel.personalNumber.ToString()); //personal number is used for the other person to be linked.

            if (user != null)
            {
                try
                {
                    user.familyNumber = relatedUser.familyNumber;
                    
                    await _userManager.UpdateAsync(user);
                    SendEmail(user.Email, "An application for linking your health card has been recieved. Someone from the health services " +
                        "team will contact you if more information is required. Otherwise, your new health card will be mailed to you in 2-3 weeks. Thanks!");
                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(new { message = userModel.address });
                }

            }
            else
            {
                return BadRequest(new { message = "Sorry, user could not be found." });
            }
        }

        [HttpPost]
        [Route("UnlinkAccount")]
        //POST: /api/ApplicationUser/UpdateAccountInfo
        public async Task<IActionResult> UnlinkAccount(ApplicationUser userModel)
        {
            var user = await _userManager.FindByIdAsync((userModel.Id).ToString());
            var relatedUser = await _userManager.FindByIdAsync(userModel.personalNumber.ToString()); //personal number is used for the other person to be linked.


            if (user != null)
            {
                try
                {
                    //Assign a new family number to the user.
                    user.familyNumber = rnd.Next(1, 999999);
                    await _userManager.UpdateAsync(user);
                    SendEmail(user.Email, "An application for unlinking your health card has been recieved. Someone from the health services " +
                        "team will contact you if more information is required. Otherwise, your new health card will be mailed to you in 2-3 weeks. Thanks!");
                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(new { message = userModel.address });
                }

            }
            else
            {
                return BadRequest(new { message = "Sorry, user could not be found." });
            }
        }

        [HttpPost]
        [Route("GetRecommendation")]
        //POST: /api/ApplicationUser/UpdateAccountInfo
        public String GetFamilyMembers(String familyNumber)
        {
            List<String> familyMembers = new List<String>();
            //String commonNumber = familyNumber;

            String recommendation = "The following individuals share the Family Number for the Health Card with you. Would ypu like to update their account information as well? ";
           
            string queryString = "SELECT firstName, lastName FROM dbo.AspNetUsers WHERE familyNumber= @familyNumber";

            SqlConnection connection = new SqlConnection(_appSettings.Connection_String);
            using (connection)
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Parameters.Add("@familyNumber", SqlDbType.NVarChar, 100);
                if (string.IsNullOrEmpty((string)familyNumber))
                {
                    command.Parameters["@familyNumber"].Value = DBNull.Value;
                }
                else
                {
                    command.Parameters["@familyNumber"].Value = familyNumber;
                }
                //command.Parameters["@familyNumber"].Value = commonNumber;
                connection.Open();
                Console.WriteLine(familyNumber);
                Console.WriteLine(queryString);
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        familyMembers.Add(reader[0] + " " + reader[1]);
                    }
                }
            }

            //Console.WriteLine(familyMembers[0]);
            //Console.WriteLine(familyMembers[familyMembers.Count-1]);

            for(int i=0; i<familyMembers.Count; i++)
            {
                recommendation += familyMembers[i] + " , ";
            }

            return familyNumber + "\n" + queryString + "\n" + recommendation;
        }

        [HttpPost]
        [Route("UploadFile")]
        //POST: /api/ApplicationUser/UploadFile
        public async Task<IActionResult> UploadFile(ApplicationUser userModel)
        {
            var user = await _userManager.FindByIdAsync((userModel.Id).ToString());

            if (user != null)
            {
                try
                {
                    user.file = userModel.file;
                    await _userManager.UpdateAsync(user);
                    Console.WriteLine("SUCCESS");
                    return Ok();

                }
                catch (Exception e)
                {
                    Console.WriteLine("FAILED:EXCEPTION TOUCHED" + userModel.Id);
                    return BadRequest(new { message = "File could not be uploaded." });
                }

            }
            else
            {
                Console.WriteLine("FAILED:EXCEPTION TOUCHED LAST" + userModel.Id);
                return BadRequest(new { message = "Sorry, user could not be found." });
            }

        }

    }
}
