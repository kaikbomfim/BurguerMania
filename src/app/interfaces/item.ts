// Interface para representar um item (categoria/hambúrguer)
export interface IItem {
    id: number; // Identificador único do item
    image: string; // URL da imagem do item
    name: string; // Nome do item
    description: string; // Descrição breve do item
    fullDescription: string; // Descrição completa do item
    category?: number; // Identificador da categoria relacionada ao item
    price?: number; // Preço do item
}
