using System.Data.Common;
using MySqlConnector;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient(_ => new MySqlConnection(builder.Configuration.GetConnectionString("Default")));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.MapGet("/", () => "Home.Identity")
    .WithName("GetName")
    .WithOpenApi();

app.MapGet("/test-db", async () =>
{
    using var connection = app.Services.GetRequiredService<MySqlConnection>();
    await connection.OpenAsync();
    return connection.State.ToString();
})
    .WithName("TestDb")
    .WithOpenApi();

app.Run();