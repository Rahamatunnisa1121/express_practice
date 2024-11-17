const express=require('express');
const router=express.Router();

const {
    createPerson,
    addPerson,
    addPersonPostman,
    updatePerson,
    deletePerson
}=require('../controllers/people');

// router.get('/',createPerson);
// router.post('/',addPerson);
// router.post('/postman',addPersonPostman);
// router.put('/:id',updatePerson);
// router.delete('/:id',deletePerson);

router.route('/').get(createPerson).post(addPerson);
router.route('/postman').post(addPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports=router;