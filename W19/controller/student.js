const Student = require('../models/student');

/* Insert Students */
exports.insertStudents = async(req,res)=>{
    try{
        await Student.insertMany([
            {
                Name:"ABC",
                Roll_No:111,
                WAD_Marks:25,
                CC_Marks:25,
                DSBDA_Marks:25,
                CNS_Marks:25,
                AI_Marks:25
            },
            {
                Name:"XYZ",
                Roll_No:112,
                WAD_Marks:30,
                CC_Marks:28,
                DSBDA_Marks:22,
                CNS_Marks:27,
                AI_Marks:29
            }
        ]);

        res.send("Students Inserted");

    }catch(err){
        res.status(500).json({error:err.message});
    }
};

/* Count + All */
exports.getAll = async(req,res)=>{
    const data = await Student.find();
    const count = await Student.countDocuments();

    res.json({
        Total_Students:count,
        Students:data
    });
};

/* DSBDA > 20 */
exports.dsbda = async(req,res)=>{
    const data = await Student.find(
        {DSBDA_Marks:{$gt:20}},
        {Name:1,_id:0}
    );

    res.json(data);
};

/* Update by Name */
exports.updateMarks = async(req,res)=>{
    await Student.updateOne(
        {Name:req.params.name},
        {$inc:{WAD_Marks:10}}
    );

    res.send("Marks Updated");
};

/* Above 25 All Subjects */
exports.above25 = async(req,res)=>{
    const data = await Student.find({
        WAD_Marks:{$gt:25},
        CC_Marks:{$gt:25},
        DSBDA_Marks:{$gt:25},
        CNS_Marks:{$gt:25},
        AI_Marks:{$gt:25}
    },{Name:1,_id:0});

    res.json(data);
};

/* Less than 40 */
exports.less40 = async(req,res)=>{
    const data = await Student.find({
        WAD_Marks:{$lt:40},
        CNS_Marks:{$lt:40}
    },{Name:1,_id:0});

    res.json(data);
};

/* Delete */
exports.deleteStudent = async(req,res)=>{
    await Student.deleteOne({Name:req.params.name});
    res.send("Student Deleted");
};

/* Table */
exports.table = async(req,res)=>{
    const data = await Student.find();

    let output = `
    <table border="1" cellpadding="10">
    <tr>
    <th>Name</th>
    <th>Roll No</th>
    <th>WAD</th>
    <th>DSBDA</th>
    <th>CNS</th>
    <th>CC</th>
    <th>AI</th>
    </tr>
    `;

    data.forEach(s=>{
        output += `
        <tr>
        <td>${s.Name}</td>
        <td>${s.Roll_No}</td>
        <td>${s.WAD_Marks}</td>
        <td>${s.DSBDA_Marks}</td>
        <td>${s.CNS_Marks}</td>
        <td>${s.CC_Marks}</td>
        <td>${s.AI_Marks}</td>
        </tr>
        `;
    });

    output += "</table>";

    res.send(output);
};