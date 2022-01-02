const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'tools',
  },
  {
    category_name: 'office',
  },
  {
    category_name: 'kitchen',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
