using Health_Card_Services;
using Health_Card_Services.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace HealthCardServices.IntegrationTests
{
    
    public class UnitTest1
    {
        public readonly HttpClient _client;
        public UnitTest1()
        {
            var appFactory = new WebApplicationFactory<Startup>();
            _client = appFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", "<jwt_token>");
        }


        [Fact]
        public async Task Test1()
        {
            UserInformationModel model = new UserInformationModel();
            model.userName = "jtaylor";
            model.password = "jtaylor12345";
            //var jsonString = JsonConvert.SerializeObject(model);
            //var content = new StringContent(jsonString, Encoding.UTF8, "application/json");


            var response = await _client.PostAsync("/api/ApplicationUser/Login", model );
            //var response = await _client.GetAsync(requestUri: /api/ApplicationUser/Login);
        }
    }
}
