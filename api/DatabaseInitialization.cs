using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Home.Identity;

public static class DatabaseInitialization
{
    public static async Task UpdateDatabaseAsync(this IHost app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            await db.Database.MigrateAsync();
        }
    }

    public static async Task EnsureAdminAsync(this IHost app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();
            var passwordHasher = scope.ServiceProvider.GetRequiredService<IPasswordHasher<IdentityUser>>();

            string adminRole = "Administrator";

            if (!await roleManager.RoleExistsAsync(adminRole))
            {
                var result = await roleManager.CreateAsync(new IdentityRole(adminRole));
                result.EnsureSuccess();
            }

            if (!await userManager.Users.AnyAsync())
            {
                string adminEmail = "admin@example.com";
                var adminUser = new IdentityUser { UserName = adminEmail, Email = adminEmail, EmailConfirmed = true };
                string adminPassword = "Admin@123456";
                var createUserResult = await userManager.CreateAsync(adminUser, adminPassword);
                createUserResult.EnsureSuccess();
                var addRoleResult = await userManager.AddToRoleAsync(adminUser, adminRole);
                addRoleResult.EnsureSuccess();
            }
        }
    }
}

public static class IdentityResultExtensions
{
    public static void EnsureSuccess(this IdentityResult result)
    {
        if (!result.Succeeded)
        {
            throw new InvalidOperationException(result.Errors.First().Description);
        }
    }
}