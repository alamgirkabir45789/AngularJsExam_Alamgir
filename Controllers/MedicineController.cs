using AngularJsExam_Alamgir.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJsExam_Alamgir.Controllers
{
    public class MedicineController : Controller
    {
        // GET Medicine/GetMedicine
        [HttpGet]
        public JsonResult GetMedicine()
        {
            using (MedicineContext db = new MedicineContext())
            {
                List<Medicine> medList = db.Medicines.ToList();
                return Json(medList, JsonRequestBehavior.AllowGet);
            }

        }

        //POST Medicine/AddMedicine  
        [HttpPost]
        public JsonResult Insert(Medicine medicine)
        {
            if (medicine != null)
            {
                using (MedicineContext db = new MedicineContext())
                {
                    db.Medicines.Add(medicine);
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
            else
            {
                return Json(new { success = false });
            }
        }


        //POST Medicine/Update     
        [HttpPost]
        public JsonResult Update(Medicine updatedMedicine)
        {
            using (MedicineContext db = new MedicineContext())
            {
                Medicine existingMedicine = db.Medicines.Find(updatedMedicine.ID);
                if (existingMedicine == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    existingMedicine.Name = updatedMedicine.Name;
                    existingMedicine.Price = updatedMedicine.Price;
                    existingMedicine.Quantity = updatedMedicine.Quantity;
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        //POST Medicine/Delete/1
        [HttpPost]
        public JsonResult Delete(int id)
        {
            using (MedicineContext db = new MedicineContext())
            {
                Medicine medicine = db.Medicines.Find(id);
                if (medicine == null)
                {
                    return Json(new { success = false });
                }
                db.Medicines.Remove(medicine);
                db.SaveChanges();
                return Json(new { success = true });
            }

        }

        public ActionResult Index()
        {
            return View();
        }
    }
}