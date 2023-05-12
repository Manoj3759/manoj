const express=require("express")
const {getTask,postTask,getTasks,updateTask,deleteTask}=require("../controller/taskController")
let taskRouter=express.Router()

// to send data
taskRouter.post("/task",postTask)
// to get data
taskRouter.get("/task",getTasks)
//to get one task to update
taskRouter.get("/task/:id",getTask)
//to update task
taskRouter.put("/task/:id",updateTask)
//to delete task
taskRouter.delete("/task/:id",deleteTask)


module.exports = taskRouter;