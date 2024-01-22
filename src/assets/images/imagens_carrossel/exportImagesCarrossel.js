async function carregarImagens() {
  const context = import.meta.glob('/src/assets/images/imagens_carrossel/*.jpg');
  return context;
}
const image = await carregarImagens();
const array = Object.values(image);
const imagens = []
array.forEach((img) => {
  imagens.push(
   img.name
  );
});

export default imagens;
