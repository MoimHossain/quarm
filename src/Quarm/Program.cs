using Quarm.Core;
using System;
using System.Net.Http;

namespace Quarm
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new HttpClient();
            var template = new DeploymentTemplate(client);

            template.GetTemplateAsync().Wait();

            Console.WriteLine("Hello World!");
        }
    }
}
