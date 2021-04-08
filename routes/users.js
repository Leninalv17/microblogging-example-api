var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res) {
  if(req.params.id == 123){
    res.json({
      "users": [
        
        {
          "id":123,
          "name": "Eladio Guardiola",
          "phones": {
            "home": "800-123-1234",
            "Mobile": "877-123-1234"
          },
          "email": [
            "jdd@example.com",
            "jd@example.org"
          ],
          "dateOfBirth":"1980-01-02T00:00:00.000Z",
          "registered":true
        },
        /*{
          "id": 456,
          "name":"Nemesio Tornero",
          "phones": {
            "home": "800-123-3498",
            "mobile": "877-432-1278"
          },
          "Email": [
            "pt@example.com",
            "pt@example.org"
          ],
          "dateOfBirth": "1983-01-09T00:00:00.000z",
          "registered": false
        }*/
      ]
    })  
  } else {
    res.status(404).send('los siento el item no se ha encontrado');
  }
});

router.post('/', function(req, res ) {
  var new_user = req.body;
  //(ToDo (Hacer algo con el nuevo usuario)
  res.status(200).send('Usuario' + req.body.name + 'Ha sido añadido satisfactoriamente');
})

router.put('/id:', function(req, res) {
  var updated_user = req.body;
  //ToDo (Hacer algo con el usuario)
  res.status(200).send('usuario' + req.body.name + 'ha sido actualizado satisfactoriamente');
});

router.delete('/:id', function(req, res) {
  //ToDo (Hacer algo con el usuario)
  res.status(200).send('usuario con id' + req.params.id + 'ha sido Borrado satisfactoriamente');
})

module.exports = router;
