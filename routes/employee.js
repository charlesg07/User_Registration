const { response } = require('express');
const express = require('express');
const Employee = require('../model/Employee');
const employeeRouter = express.Router();
const employee = require ('../model/Employee');

employeeRouter.get('/',(req,res)=>{
    Employee.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "unable to get employees",
                msgError : true
            }});
        else
            res.status(200).json(response);
    });  
});

employeeRouter.post('/',(req,res)=>{
    const employee = new Employee(req.body);
    employee.save((err,document)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "unable to add employees",
                msgError : true
            }});
        else 
            res.status(200).json({message:{
                msgBody: "Successfully Added Employee",
                msgError : false
            }});
    })
})

employeeRouter.delete('/:id',(req,res)=>{
    Employee.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "unable to delete employees",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully delete Employee",
                msgError : false
            }});
    });
});

employeeRouter.put(':id',(req,res)=>{
    Employee.findOneAndUpdate(req.params.id,req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "unable to update employees",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully updated Employee",
                msgError : false
            }});
    }); 
});

module.exports = employeeRouter;