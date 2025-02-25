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
}