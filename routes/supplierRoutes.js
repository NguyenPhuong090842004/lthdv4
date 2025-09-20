const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const authMiddleware = require('../middleware/auth'); // <-- Thêm middleware

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Get all suppliers
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: List of suppliers
 */
router.get('/', authMiddleware, supplierController.index);

router.get('/new', authMiddleware, supplierController.newForm);
router.post('/', authMiddleware, supplierController.create);

/**
 * @swagger
 * /suppliers/{id}/edit:
 *   get:
 *     summary: Edit a supplier
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier edit form
 */
router.get('/:id/edit', authMiddleware, supplierController.editForm);

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Update a supplier
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier updated
 */
router.put('/:id', authMiddleware, supplierController.update);

/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Delete a supplier
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier deleted
 */
router.delete('/:id', authMiddleware, supplierController.delete);

module.exports = router;
