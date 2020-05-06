const app = require("express")();
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const sequelize = new Sequelize("lifescheduler","stancuvlad","pass",{
    dialect:'mysql',
    define: {
        defaultScope: {
            attributes: {
                exclude: ['created_at', 'updated_at']
            }
        }
    },
    dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) { 
            if (field.type === 'DATETIME') {
                return field.string();
            }
            return next();
            },
    },
    timezone: '+03:00',
});


sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})

const User = sequelize.define('user', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username : Sequelize.STRING,
    parola : Sequelize.STRING,
    email : Sequelize.STRING,
	nivel_de_acces : Sequelize.INTEGER
},  {
    timestamps: false
});

const Item = sequelize.define('item', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
	user_id : {
        type : Sequelize.INTEGER
    },
    name : Sequelize.STRING,
    description : Sequelize.STRING,
},  {
    timestamps: false
});

User.hasMany(Item,  {foreignKey: 'user_id', sourceKey: 'id'});
Item.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'});

app.get("/create", (req,res) => {
    sequelize.sync({force : true})
    .then(() => {
        let user = {
			username : 'root',
			parola : 'pass',
			email : 'email@gmail.com',
			nivel_de_acces : 1
		};
		let item = {
		    user_id : 1,
		    name : 'Wash dishes',
			description: 'NONE'
		};
		User.create(user);
		Item.create(item);
        res.status(200).send("Tabele create");
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send("A aparut o eroare in timpul crearii tabelelor!");
    });
});

app.get("/users", (req, res) => {
    User.findAll()
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("A aparut o eroare la intoarcerea datelor");
        });
});

app.post("/users", (req, res) => {
    User.create(req.body)
        .then(() => res.status(201).send("Utilizator creat"))
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal server error");
        });
});

app.get("/users/:id", (req,res) => {
    User.findByPk(req.params.id)
        .then((user) => {
            if(user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("Nu exista utilizator cu acest id");
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal server error");
        });
});

app.put("/users/:id", (req, res) => {
    User.findByPk(req.params.id)
        .then((user) => {
            if(user){
                return user.update(req.body);
            }else {
                res.status(404).send("Nu exista utilizator cu acest id");
            }
        })
        .then(() => res.status(201).send("Data updated"))
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal server error");
        });
});

app.get('/users/:id/items', (req, res) => {
	try{
	    User.findByPk(req.params.id)
    		.then((user) => {
                if(user) {
                    user.getItems()
                        .then(function (items) {
                            res.status(200).json(items);
                        });            
                } else {
                    res.status(404).send("Nu exista utilizator cu acest id");
                }
    		});
	}
	catch(error){
	    console.warn(error);
		res.status(500).send("Internal server error");
	}
});

app.post('/users/:id/items', (req, res) => {
	try{
		User.findByPk(req.params.id)
		    .then((user) => {
		       if (user){
		            let item = req.body;
			        Item.create(item);
        			res.status(201).send("Item creat");
    		    }
    		    else{
    			    res.status(404).send("Utilizatorul cu acest id nu a fost gasit!");
		        } 
		    });
	}
	catch(e){
		console.warn(e);
		res.status(500).json({message : 'Internal server error'});
	}
});

app.get('/users/:id/items/:bid', (req, res) => {
	try{
	    User.findByPk(req.params.id)
    		.then((user) => {
                if(user) {
                    Item.findByPk(req.params.bid)
                        .then((item) => {
                            if(item){
                                user.getItems()
                                    .then(function (items) {
                                        var val = req.params.bid - 1;
                                        res.status(200).json(items[val]); 
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        res.status(500).send("Eroare");
                                    });
                            }else{
                                res.status(404).send("Nu exista item cu acest id");
                            }                
                        });       
                              
                } else {
                    res.status(404).send("Nu exista utilizator cu acest id");
                }
    	});
	}
	catch(error){
	    console.warn(error);
		res.status(500).send("Internal server error");
	}
});

app.put('/users/:id/items/:bid', (req, res) => {
	try{
	    User.findByPk(req.params.id)
    		.then((user) => {
                if(user) {
                    Item.findByPk(req.params.bid)
                        .then((item) => {
                            if(item){
                                return item.update(req.body);
                            }else{
                                res.status(404).send("Nu exista item cu acest id");
                            }
                    });
                } else {
                    res.status(404).send("Nu exista utilizator cu acest id");
                }
    	});
	}
	catch(error){
	    console.warn(error);
		res.status(500).send("Internal server error");
	}
});

app.listen(8080)