using Microsoft.EntityFrameworkCore.Migrations;

namespace Health_Card_Services.Migrations
{
    public partial class UpdateDatabaseMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "familyNumber",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "personalNumber",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "valid",
                table: "AspNetUsers",
                type: "bit",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "familyNumber",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "personalNumber",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "valid",
                table: "AspNetUsers");
        }
    }
}
