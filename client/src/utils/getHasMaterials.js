export default function getHasMaterials(materials, inventory) {
  return materials.every((material) => inventory.find(item => item.type === material.type));
}