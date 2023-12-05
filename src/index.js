//crear in web server en express
//invocar la libreria express
//const express=require('express')
//crear una instancia
//const app=express()
//iniciar servidor en el puerto 3000


/*
app.get('/',(req,res)=>{
res.send("BIENVENIDOS ")
})

app.get('/dashboard',(req,res)=>{
    res.send("dashboard principal")
    })
    */
   /*
    // app.use((req,res)=>{
    //     res.send("404 - Not Found")
    //     })*/
    //     //mandar info en formato JSON
        
    //     app.use(express.json())

    //     app.post('/register',(req,res)=>{
    //       const{pedido,solicitado}=req.body
    //       res.send(`el pedido de ${pedido}es realizado por ${solicitado}`)


    //     })

    //     app.get('/pedido/:abc',(req,res)=>{
    //         console.log(req.params)
    //         res.send(`el pedido es h ${req.params.abc}el pedido es h ${req.params.abc}`)
    //     })

    //     app.get('/search',(req,res=>{
    //         console.log(req,query);
    //         if (req.query.tipo=="sencilla")
    //         {
    //             res.send("/hamburguesa sencilla")
    //         }else{
    //             res.send("otro tipo de hamburguesa")
    //         }

           
    //     }
        
        
    //     ))

/*const{engine}=require('express-handlebars');
const path = require('path');
//const path = require('path');
app.use(express.json())
       

//vamos a ujtilizar un motor de plantillas
app.engine('handlebars', engine());
//extension de las paginas
app.set('view engine', 'handlebars');
//ubicacion del directorio views
const ruta = path.join(__dirname,"views")
app.set('views', ruta);

/*

app.get('/hamburguesa/vegana', (req, res) => {
    res.render('home');
});

app.get('/hamburguesa/about', (req, res) => {
    res.render('about');
});

*/
const express=require('express')
//crear una instancia
const app=express()
 const port=3000

 app.use(express.json())
/*
app.get('/entrada',(req,res)=>{
    res.send("entrada al local")
})

//crear un midleware
app.use((req,res,next)=>{
    const{email,password}=req.body
    if(email==="naty123@gmail.com"&&password=="12345"){
        next()
    }
    else{
        res.send("usuario no registrado")
    }
})
*/







app.get('/dashboad',(req,res)=>{
    res.send("landig")
})

app.get('/pedido',(req,res)=>{
    res.send(`Bienvenido  usuario`)
})




app.listen(3000)
console.log("web sertver ejecutandose en el puerto 3000")

