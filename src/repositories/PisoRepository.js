import HTTP from "@/common/http";

const resource = "pisos";

export default {
  async findAll() {
    const response = await HTTP.get(resource);
    return response.data;
  },
  async publicar(piso) {
    return await HTTP.post(resource, piso);
  },
};
