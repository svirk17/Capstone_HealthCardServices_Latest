using Health_Card_Services.Controller;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using FakeItEasy;
using Microsoft.AspNetCore.Identity;
using Health_Card_Services.Models;
using Microsoft.AspNetCore.Mvc;

namespace HealthCardServices.IntegrationTests
{
    public class WebAPI_UnitTests
    {

        [Fact]
        public async Task Login_Correct_Credentials()
        {
            //Arrange
            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager,appSettings);
            LoginModel testUserCredentials = new LoginModel();
            testUserCredentials.userName = "jtaylor";
            testUserCredentials.password = "jtaylor12345";

            //Act
            var actionResult = await controller.Login(testUserCredentials);

            //Assert
            var result = actionResult as OkObjectResult;
            var returnResponse = result.Value as IEnumerable<OkObjectResult>;
            Assert.NotNull(returnResponse);
        }
    }
}
