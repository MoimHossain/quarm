using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace Quarm.Core
{
    public class DeploymentTemplate
    {
        private const string BASE = "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json";
        private readonly HttpClient client;

        public DeploymentTemplate(HttpClient client)
        {
            this.client = client;
        }

        public async Task GetTemplateAsync()
        {
            var item = await client.GetFromJsonAsync<dynamic>(BASE);

            System.Console.WriteLine(DateTime.Now);
        }
    }
}
