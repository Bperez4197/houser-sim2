module.exports = {
    read: (req,res,next) => {
        const db = req.app.get('db');
        db.get_houses().then(response => {
            console.log(response);
            res.status(200).json(response);
        }).catch(err => console.log(err));
    },

    add_house: (req,res,next) => {
        const db = req.app.get('db');
        const {name,address,city,homeState,zipcode,mortgage,rent,img} = req.body;
        db.add_house([name,address,city,homeState,zipcode,img,mortgage,rent,]).then(response => {
            console.log(response);
            res.status(200).json(response);
        }).catch(err => console.log(err));
    },

    delete: (req,res,next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_house([id]).then(()=> res.status(200).json('Deleted'))
    }
};