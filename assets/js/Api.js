

const dato_animal = (() => {
    try {
        const obtenerDatos = async () => {
            const url = 'http://127.0.0.1:5500/animales.json';
            const animales = await fetch(url);
            const respuesta = await animales.json();
            return respuesta;
        }
        return {
            mostrar: obtenerDatos()
        }
    } catch (error) {
        alert(error)
    }

})();
export default dato_animal