using FakeItEasy;
using Health_Card_Services.Controller;
using Health_Card_Services.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Assert = Microsoft.VisualStudio.TestTools.UnitTesting.Assert;

namespace HealthCardServices.IntegrationTests
{
    [TestClass]
    public class ControllersUnitTests
    {
        [TestMethod]
        public void RenewPreviousCard_ShouldReturnOk()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.Id = "556872";
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863;
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.RenewPreviousCard(user1);

            //Assert
            Assert.IsTrue(user1.valid); //Now the health card has been renewed and is active.
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }

        [TestMethod]
        public void RenewPreviousCard_ShouldReturnBadRequest()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863;
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.RenewPreviousCard(user1);

            //Assert
            Assert.IsFalse(user1.valid); 
            Assert.IsInstanceOfType(result, typeof(BadRequestResult));
        }

        [TestMethod]
        public void CancelCard_ValidUser()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.Id = "556872";
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863;
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.CancelCard(user1);

            //Assert
            Assert.IsFalse(user1.valid); //Now the health card has been renewed and is active.
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }

        [TestMethod]
        public void CancelCard_InvalidUser()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863;
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.CancelCard(user1);

            //Assert
            Assert.IsTrue(user1.valid);
            Assert.IsInstanceOfType(result, typeof(BadRequestResult));
        }

        [TestMethod]
        public void UpdateAccountInfoTest()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.Id = "556872";
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863;
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.UpdateAccountInfo(user1);

            //Assert
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }

        [TestMethod]
        public void FirstRegistrationTest()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.Id = "556872";
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863;
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.FirstRegistration(user1);

            //Assert
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }

        [TestMethod]
        public void LinkAccountTest()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.Id = "556872";
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863; // this field here is used as personal number of the other person.
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.LinkAccount(user1);

            //Assert
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }

        [TestMethod]
        public void UnlinkAccountTest()
        {
            //Arrange
            var user1 = new ApplicationUser();
            user1.Id = "556872";
            user1.firstName = "Jasper";
            user1.lastName = "Taylor";
            user1.address = "69 Lake Village Road, Brandon";
            user1.UserName = "jtaylor";
            user1.Email = "skv5210@psu.edu";
            user1.PhoneNumber = "204-321-3421";
            user1.familyNumber = 443863; // this field here is used as personal number of the other person.
            user1.valid = false; //The health card is currently invalid/not current.

            var userManager = A.Fake<UserManager<ApplicationUser>>();
            var signInManager = A.Fake<SignInManager<ApplicationUser>>();
            var appSettings = A.Fake<Microsoft.Extensions.Options.IOptions<ApplicationSettings>>();
            var fakeUsers = A.CollectionOfDummy<LoginModel>(2).AsEnumerable();
            var controller = new ApplicationUserController(userManager, signInManager, appSettings);

            //Act
            var result = controller.UnlinkAccount(user1);

            //Assert
            Assert.IsInstanceOfType(result, typeof(OkResult));
        }


    }
}
