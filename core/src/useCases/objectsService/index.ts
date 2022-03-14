import ObjectRepository from '../../repository/database/object';
class ObjectsService {
  getList = async () => {
    const { value, error } = await ObjectRepository.getList();
    if (error) return { error: error };
    return { value: value };
  };
  getObject = async (id: string) => {
    const { value, error } = await ObjectRepository.getObject(id);
    if (error) return { error: error };
    return { value: value };
  };
  createObject = async (
    img: string,
    name: string,
    region: string,
    text: string,
    rate: number
  ) => {
    const { value, error } = await ObjectRepository.createObject(
      img,
      name,
      region,
      text,
      rate
    );
    if (error) return { error: error };
    return { value: value };
  };
  getObjectByName = async (name: string) => {
    const { value, error } = await ObjectRepository.getObjectByName(
      name
    );
    if (error) return { error: error };
    return { value: value };
  };
  getObjectsByQuery = async () => {
    const { value, error } = await ObjectRepository.getObjectsByQuery();
    if (error) return { error: error };
    return { value: value };
  }
}
export default new ObjectsService();
