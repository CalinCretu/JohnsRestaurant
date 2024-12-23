// src/services/dishService.js
import db from '../db';

export const getDishes = async () => {
  return await db.dishes.toArray();
};

export const addDish = async (dish) => {
  return await db.dishes.add(dish);
};

export const updateDish = async (id, dish) => {
  return await db.dishes.update(id, dish);
};

export const deleteDish = async (id) => {
  return await db.dishes.delete(id);
};
