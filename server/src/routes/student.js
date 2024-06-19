const {Router} = require('express');
const {issuedBook,getAllAuthors, getUserId, rateBook, getAllUserRatings} = require('../controllers/student')
const router = Router();


router.put('/dashboard/issue/:isbn', issuedBook );
router.get('/dashboard/authors', getAllAuthors );
// router.post('/dashboard/rate/:user_id/:isbn/:ratings', rateBook);
router.post('/dashboard/rate', rateBook);
router.get('/dashboard/:userMail', getUserId);
router.get('/dashboard/rate/:user_id', getAllUserRatings);

module.exports = router;