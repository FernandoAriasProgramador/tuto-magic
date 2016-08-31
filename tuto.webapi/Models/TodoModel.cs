using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace tuto.webapi.Models
{
    public class TodoModel
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime DateInit { get; set; }
        public DateTime? DateEnd { get; set; }
        public bool Do { get; set; }
    }
}