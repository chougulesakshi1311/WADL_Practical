const Song = require('../models/song');

/* Insert 5 Songs */
exports.insertSongs = async(req,res)=>{
    try{
        await Song.insertMany([
            {
                Songname:"Kesariya",
                Film:"Brahmastra",
                Music_director:"Pritam",
                Singer:"Arijit Singh"
            },
            {
                Songname:"Tum Hi Ho",
                Film:"Aashiqui 2",
                Music_director:"Mithoon",
                Singer:"Arijit Singh"
            },
            {
                Songname:"Kala Chashma",
                Film:"Baar Baar Dekho",
                Music_director:"Badshah",
                Singer:"Neha Kakkar"
            },
            {
                Songname:"Malang Sajna",
                Film:"Single",
                Music_director:"Sachin Jigar",
                Singer:"Sachin"
            },
            {
                Songname:"Apna Bana Le",
                Film:"Bhediya",
                Music_director:"Sachin Jigar",
                Singer:"Arijit Singh"
            }
        ]);

        res.send("5 Songs Inserted");

    }catch(err){
        res.status(500).json({error:err.message});
    }
};

/* Count + All Songs */
exports.getAll = async(req,res)=>{
    const data = await Song.find();
    const count = await Song.countDocuments();

    res.json({
        TotalSongs:count,
        Songs:data
    });
};

/* Songs by Music Director */
exports.directorSongs = async(req,res)=>{
    const data = await Song.find(
        {Music_director:req.params.name},
        {Songname:1,_id:0}
    );

    res.json(data);
};

/* Director + Singer */
exports.directorSinger = async(req,res)=>{
    const data = await Song.find({
        Music_director:req.params.director,
        Singer:req.params.singer
    });

    res.json(data);
};

/* Delete Song */
exports.deleteSong = async(req,res)=>{
    await Song.deleteOne({Songname:req.params.name});
    res.send("Song Deleted");
};

/* Add Favourite Song */
exports.addSong = async(req,res)=>{
    await Song.create(req.body);
    res.send("New Song Added");
};

/* Singer from Film */
exports.singerFilm = async(req,res)=>{
    const data = await Song.find({
        Singer:req.params.singer,
        Film:req.params.film
    });

    res.json(data);
};

/* Update Actor Actress */
exports.updateActor = async(req,res)=>{
    await Song.updateOne(
        {Songname:req.params.name},
        {
            $set:{
                Actor:req.body.Actor,
                Actress:req.body.Actress
            }
        }
    );

    res.send("Updated");
};

/* Table */
exports.table = async(req,res)=>{
    const data = await Song.find();

    let output = `
    <table border="1" cellpadding="10">
    <tr>
    <th>Song Name</th>
    <th>Film</th>
    <th>Music Director</th>
    <th>Singer</th>
    <th>Actor</th>
    <th>Actress</th>
    </tr>
    `;

    data.forEach(s=>{
        output += `
        <tr>
        <td>${s.Songname}</td>
        <td>${s.Film}</td>
        <td>${s.Music_director}</td>
        <td>${s.Singer}</td>
        <td>${s.Actor || ""}</td>
        <td>${s.Actress || ""}</td>
        </tr>
        `;
    });

    output += "</table>";

    res.send(output);
};