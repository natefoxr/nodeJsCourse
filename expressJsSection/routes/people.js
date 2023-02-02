const express = require('express');
const router = express.Router();

const { getPeople, createPerson, createPersonPostman, modifyPerson, deletePerson } = require('../controllers/people')


// Option One
// router.get('/', getPeople);
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', modifyPerson)
// router.delete('/:id', deletePerson)

// Option Two
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(modifyPerson).delete(deletePerson);


module.exports = router