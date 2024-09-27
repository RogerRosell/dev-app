'use server';

import { getAllBrands, addBrand2, deleteBrand2 } from './brands.actions';
import { getAllDevelopers, addDeveloper2, deleteDeveloper2 } from "./develpers.actions";
import { getAllAgitationfrequencies, addAgitationfrequencies2, deleteAgitationFrequency2 } from './agitationFrequency.actions';
import { getAllEmulsions, addEmulsion, deleteEmulsion2 } from './emulsions.actions';

type Item = 'brand' | 'developer' | 'agitationFrequency' | 'emulsion';

type Action = 'add' | 'delete' | 'list';

type ItemFunctions = {
  getAll: () => Promise<any>;
  add: (item: any) => Promise<any>;
  delete: (id: string) => Promise<any>;
};

const itemFunctionsMap: Record<Item, ItemFunctions> = {
  brand: {
    getAll: getAllBrands,
    add: addBrand2,
    delete: deleteBrand2,
  },
  developer: {
    getAll: getAllDevelopers,
    add: addDeveloper2,
    delete: deleteDeveloper2,
  },
  agitationFrequency: {
    getAll: getAllAgitationfrequencies,
    add: addAgitationfrequencies2,
    delete: deleteAgitationFrequency2,
  },
  emulsion: {
    getAll: getAllEmulsions,
    add: addEmulsion,
    delete: deleteEmulsion2,
  },
};

export async function handleItemAction(action: Action, item: Item, payload?: any) {
  const itemFunctions = itemFunctionsMap[item];

  switch (action) {
    case 'list':
      return await itemFunctions.getAll();
    case 'add':
      if (!payload) throw new Error('Payload is required for adding an item');
      return await itemFunctions.add(payload);
    case 'delete':
      if (!payload) throw new Error('Payload is required for deleting an item');
      return await itemFunctions.delete(payload);
    default:
      throw new Error('Invalid action');
  }
}

// Example usage:
// handleItemAction('list', 'brand');
// handleItemAction('add', 'developer', { name: 'New Developer' });
// handleItemAction('delete', 'emulsion', 'emulsionId');