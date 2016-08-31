namespace tuto.webapi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changedateend : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.TodoModels", "DateEnd", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.TodoModels", "DateEnd", c => c.DateTime(nullable: false));
        }
    }
}
