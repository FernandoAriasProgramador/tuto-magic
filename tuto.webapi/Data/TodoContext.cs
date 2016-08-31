using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using tuto.webapi.Models;

namespace tuto.webapi.Data
{
    public class TodoContext: DbContext
    {
        public DbSet<TodoModel> Todo { get; set; }
    }
}