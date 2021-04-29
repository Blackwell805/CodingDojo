using Microsoft.EntityFrameworkCore.Migrations;

namespace beltExam2.Migrations
{
    public partial class moreupdates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fan_Hobby_HobbyId",
                table: "Fan");

            migrationBuilder.DropForeignKey(
                name: "FK_Fan_Users_UserId",
                table: "Fan");

            migrationBuilder.DropForeignKey(
                name: "FK_Hobby_Users_UserId",
                table: "Hobby");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Hobby",
                table: "Hobby");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fan",
                table: "Fan");

            migrationBuilder.RenameTable(
                name: "Hobby",
                newName: "Hobbies");

            migrationBuilder.RenameTable(
                name: "Fan",
                newName: "Fans");

            migrationBuilder.RenameIndex(
                name: "IX_Hobby_UserId",
                table: "Hobbies",
                newName: "IX_Hobbies_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Fan_UserId",
                table: "Fans",
                newName: "IX_Fans_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Fan_HobbyId",
                table: "Fans",
                newName: "IX_Fans_HobbyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Hobbies",
                table: "Hobbies",
                column: "HobbyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fans",
                table: "Fans",
                column: "FanId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fans_Hobbies_HobbyId",
                table: "Fans",
                column: "HobbyId",
                principalTable: "Hobbies",
                principalColumn: "HobbyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Fans_Users_UserId",
                table: "Fans",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Hobbies_Users_UserId",
                table: "Hobbies",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fans_Hobbies_HobbyId",
                table: "Fans");

            migrationBuilder.DropForeignKey(
                name: "FK_Fans_Users_UserId",
                table: "Fans");

            migrationBuilder.DropForeignKey(
                name: "FK_Hobbies_Users_UserId",
                table: "Hobbies");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Hobbies",
                table: "Hobbies");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fans",
                table: "Fans");

            migrationBuilder.RenameTable(
                name: "Hobbies",
                newName: "Hobby");

            migrationBuilder.RenameTable(
                name: "Fans",
                newName: "Fan");

            migrationBuilder.RenameIndex(
                name: "IX_Hobbies_UserId",
                table: "Hobby",
                newName: "IX_Hobby_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Fans_UserId",
                table: "Fan",
                newName: "IX_Fan_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Fans_HobbyId",
                table: "Fan",
                newName: "IX_Fan_HobbyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Hobby",
                table: "Hobby",
                column: "HobbyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fan",
                table: "Fan",
                column: "FanId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fan_Hobby_HobbyId",
                table: "Fan",
                column: "HobbyId",
                principalTable: "Hobby",
                principalColumn: "HobbyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Fan_Users_UserId",
                table: "Fan",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Hobby_Users_UserId",
                table: "Hobby",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
