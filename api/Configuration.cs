namespace Home.Identity;

public static class Configuration
{
    public static string GetConnectionString(this IConfiguration configuration)
    {
        string? connectionString = configuration.GetConnectionString("Default");
        if (string.IsNullOrEmpty(connectionString))
        {
            throw new InvalidOperationException($"Connection string 'Default' not found.");
        }
        return connectionString;
    }

    public static string GetCorsOrigin(this IConfiguration configuration)
    {
        string? corsOrigin = configuration.GetValue<string>("CorsOrigin");
        if (string.IsNullOrEmpty(corsOrigin))
        {
            throw new InvalidOperationException($"CorsOrigin not found.");
        }
        return corsOrigin;
    }

    public static string GetCookieDomain(this IConfiguration configuration)
    {
        string? cookieDomain = configuration.GetValue<string>("CookieDomain");
        if (string.IsNullOrEmpty(cookieDomain))
        {
            throw new InvalidOperationException($"CookieDomain not found.");
        }
        return cookieDomain;
    }
}