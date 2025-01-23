const express = require('express');
const { createInteraction, getInteractions, updateInteraction, deleteInteraction } = require('../controllers/interactionController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['user', 'admin']), createInteraction);
router.get('/', authMiddleware, roleMiddleware(['user', 'admin']), getInteractions);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateInteraction);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteInteraction);

module.exports = router;
