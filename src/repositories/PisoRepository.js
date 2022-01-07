import HTTP from "@/common/http";

const resource = "pisos";

export default {
  async findAll() {
    const response = await HTTP.get(resource);
    return response.data;
  },
  async publicar(piso) {
    if (piso.idPiso) {
      return await HTTP.put(`${resource}/${piso.idPiso}`, piso);
    }
    return await HTTP.post(resource, piso);
  },
  async findById(id) {
    const response = await HTTP.get(`${resource}/${id}`);
    return response.data;
  },
  async subirImagen(id, file) {
    const formData = new FormData();
    formData.append("imagen", file);
    return (
      await HTTP.post(`${resource}/${id}/imagenes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
  },
  async borrarImagen(idPiso, idImagen) {
    await HTTP.delete(`${resource}/${idPiso}/imagenes/${idImagen}`);
  },
  async cargarImagenes(id) {
    const response = await HTTP.get(`${resource}/${id}/imagenes`);
    return response.data;
  },
  async ponerPortada(idPiso, idImagen, body) {
    const response = await HTTP.put(`${resource}/${idPiso}/imagenes/${idImagen}`, body);
    return response.data;
  },
  async hacerPregunta(idPiso, pregunta) {
    const response = await HTTP.post(`${resource}/${idPiso}/preguntas`, pregunta);
    return response.data;
  },
  async responder(idPiso, idPregunta, respuesta) {
    const response = await HTTP.post(`${resource}/${idPiso}/preguntas/${idPregunta}`, respuesta);
    return response.data;
  },
};
