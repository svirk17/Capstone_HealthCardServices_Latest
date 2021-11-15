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
        public  HttpClient TestClient;
        public IntegrationTest()
        {
            var appFactory = new WebApplicationFactory<Startup>()
                .WithWebHostBuilder(builder =>
                {
                    builder.ConfigureServices(services =>
                    {
                        var descriptor = services.SingleOrDefault(
                            d => d.ServiceType ==
                                typeof(DbContextOptions<AuthenticationContext>));

                        services.Remove(descriptor);

                        services.AddDbContext<AuthenticationContext>(options =>
                        {
                            options.UseInMemoryDatabase("TestDB");
                        });
                    }
                );
                    }
                );
            TestClient = appFactory.CreateClient();
        }

        public async Task AuthenticateAsync()
        {
            TestClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", await GetJwtAsync());
        }

        private async Task<string> GetJwtAsync()
        {
            var response = await TestClient.PostAsJsonAsync(ApiRoutes.Identity.Register, new UserRegistrationRequest)

            return response;
        }
    }
}
