using Health_Card_Services.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
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

        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
        }

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
                personalNumber = rnd.Next(1,999999)
            };

            //Entering the user information into the database.
            try
            {
                var result =  await _userManager.CreateAsync(applicationUser, model.password);
                return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
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

    }
}
