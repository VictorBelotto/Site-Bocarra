async function carregarImagens() {
  const context = import.meta.glob('/src/assets/images/circo_fantastico/*.jpg');
  return context;
}
const image = await carregarImagens();
const array = Object.values(image);
const imagens = {
  circoFantastico: [],
};
array.forEach((img) => {
  imagens.circoFantastico.push(
   img.name
  );
});
export default imagens;


