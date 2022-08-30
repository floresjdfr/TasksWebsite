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
using TasksAPI.Repositories;
using Microsoft.OpenApi.Models;
using TasksAPI.Settings;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using TasksAPI.Auth;
using Microsoft.AspNetCore.Authorization;

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
                    policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                });
            });

            //Maps appsettings.json into ExampleDBSettings
            services.Configure<ExampleDBSettings>(Configuration.GetSection(nameof(ExampleDBSettings)));

            //Adds implementations of interfaces to the Service Container to let .Net know how to resolve the Interfaces
            services.AddSingleton<IDatabaseSettings>(item => item.GetRequiredService<IOptions<ExampleDBSettings>>().Value);
            services.AddSingleton<TaskRepository>();
            services.AddSingleton<UserRepository>();

            services.AddControllers();
            services.AddSwaggerGen();

            string domain = $"https://{Configuration["Auth0:Domain"]}/";
            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = domain;
                    options.Audience = Configuration["Auth0:Audience"];
                    // If the access token does not have a `sub` claim, `User.Identity.Name` will be `null`. Map it to a different claim by setting the NameClaimType below.
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        NameClaimType = ClaimTypes.NameIdentifier
                    };
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("read:messages", policy => policy.Requirements.Add(new HasScopeRequirement("read:messages", domain)));
            });

            services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();
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

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
