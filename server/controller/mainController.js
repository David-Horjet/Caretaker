const home = (req,res)=>{
    return res.json({
        status: true,
        message: "Caretaker's Api is Up and Running 😎",
    })
}

// const lost = (req,res)=>{
//     return res.json({
//         status: false,
//         message: "Sorry, You've completely lost your way 🤔 ",
//     })
// }

module.exports= {
    home,
    // lost
}