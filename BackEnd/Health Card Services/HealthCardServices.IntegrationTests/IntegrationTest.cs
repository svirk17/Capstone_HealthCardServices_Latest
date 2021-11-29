using Health_Card_Services;
using Health_Card_Services.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace HealthCardServices.IntegrationTests
{
    public class IntegrationTest
    {
        private readonly HttpClient TestClient;
        public IntegrationTest()
        {
            var appFactory = new WebApplicationFactory<Startup>(); 
            TestClient = appFactory.CreateClient();
        }

        public object ApiRoutes { get; private set; }

        [Fact]
        public async Task Test1()
        {
            //var response = await TestClient.GetAsync(requestUri: ApiRoutes.Posts.Get.Replace(oldValue: "(postId)"), newValue: "1");
        }

        /*
        public async Task AuthenticateAsync()
        {
            TestClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", await GetJwtAsync());
        }
        */
        /*

        private async Task<string> GetJwtAsync()
        {
            var response = await TestClient.PostAsJsonAsync(ApiRoutes.Identity.Register, new UserRegistrationRequest)

            return response;
        }
        */
    }
}
