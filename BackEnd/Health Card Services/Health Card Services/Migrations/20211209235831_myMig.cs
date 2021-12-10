using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Health_Card_Services.Migrations
{
    public partial class myMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "file",
                table: "AspNetUsers",
                type: "varbinary",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "file",
                table: "AspNetUsers");
        }
    }
}
