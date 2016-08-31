using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using tuto.webapi.Data;
using tuto.webapi.Models;

namespace tuto.webapi.Controllers
{
    public class TodoController : ApiController
    {
        private TodoContext db = new TodoContext();

        [HttpGet]
        public IHttpActionResult List()
        {
            return Ok(db.Todo.ToList());
        }

        public IHttpActionResult Add(TodoModel model)
        {
            var entity = db.Todo.FirstOrDefault(x => x.ID == model.ID) ?? new TodoModel();

            entity.Name = model.Name;
            entity.DateEnd = null;
            entity.DateEnd = model.Do? DateTime.Now : entity.DateEnd;
            entity.Do = model.Do;

            if (entity.ID == 0)
            {
                entity.DateInit = DateTime.Now;
                db.Todo.Add(entity);
            }
            db.SaveChanges();

            return Ok(entity);
        }

        [HttpGet]
        public IHttpActionResult Delete(int id)
        {
            var r = Request;
            var entity = db.Todo.FirstOrDefault(x => x.ID == id);
            if (entity != null)
            {
                db.Todo.Remove(entity);
                db.SaveChanges();

                return Ok(id);
            }
            return NotFound();
        }

    }
}
