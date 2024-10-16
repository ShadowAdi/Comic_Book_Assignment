const { body, validationResult } = require('express-validator');

const validateComicInput = [
    body('bookName').notEmpty().withMessage('Book name is required'),
    body('authorName').notEmpty().withMessage('Author name is required'),
    body('yearOfPublication').isInt({ min: 1900 }).withMessage('Valid publication year is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a valid number'),
    body('numberOfPages').isInt({ min: 1 }).withMessage('Number of pages must be an integer greater than 0'),
    body('condition').isIn(['new', 'used']).withMessage('Condition must be either "new" or "used"'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateComicInput;
