using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TasksAPI.Models;
using TasksAPI.Repositories;
using Microsoft.OpenApi.Models;

namespace TasksAPI
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        readonly string AllowSpecifications = "_AllowSpecifications";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: AllowSpecifications, policy =>
                {
                    policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
                });
            });
            services.Configure<TasksDatabaseSettings>(Configuration.GetSection(nameof(TasksDatabaseSettings)));
            services.AddSingleton<IDatabaseSettings>(item => item.GetRequiredService<IOptions<TasksDatabaseSettings>>().Value);
            services.AddSingleton<TaskRepository>();
            services.AddControllers();
            services.AddSwaggerGen();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1");
                });

            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(AllowSpecifications);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
